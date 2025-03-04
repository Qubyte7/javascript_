import Search from "./components/Search.jsx";
import {useState, useEffect} from "react";
import Loader from "./components/Loader.jsx";
import MovieCard from "./components/MovieCard.jsx";
import {useDebounce} from "react-use";
import {getTrendingMovies, UpdateSearchcount} from "./appwrite.js";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        authorization: `Bearer ${API_KEY}`,
    }
}
const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [movieList, setMovieList] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    // the debounce delays  the input for some time
    // and debouncing the search allow to not make a request for each character that is typed in the search field
    //by waiting the user to stop typing for specified period in milliseconds
    useDebounce(()=> setDebouncedSearchTerm(searchTerm), 1000,[searchTerm]);

    //fetch movie function
    const fetchMovies = async (query = '') => {
        // while we are in the process of fetching we can do this
        setLoading(true);
        setErrorMessage('')
        try{
            // the encodeURI we are using allow us to process our string in the Url
            const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURI(query)}`: `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint,API_OPTIONS)
            if(!response.ok){
                throw new Error("Could not fetch movies from API");
            }
            const data = await response.json();
            console.log(data)
            if(data.Response === 'False'){
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([])
                return;
            }
            // we are seeting our movielist with data we got from the api
            // here we are looping through each data in the results returned and we filter for the one with adult == false
            setMovieList(data.results.filter((res)=>!res.adult) || [])
            // here we checking that the user has inputed the query and there have been results displayed
            if(query &&  data.results.length>0){
                await UpdateSearchcount(query,data.results[0])
            }
        }catch(e){
            console.error("Error fetching Movies : "+ e);
            setErrorMessage("Error fetching Movies : "+e)
        }finally {
            setLoading(false);
        }
    }

    // fetch trending Movie Function
    const fetchTrendingMovies = async()=>{
        try {
            const Movies = await getTrendingMovies();
            setTrendingMovies(Movies);
        }catch (e){
            console.error("error in fetching trending movies",e)
        }
    }

    useEffect(() => {
        fetchMovies(debouncedSearchTerm)
    },[debouncedSearchTerm])
    // fetching trending Movie for our page first render
    useEffect(() => {
        fetchTrendingMovies()
    }, []);
    return (
       <main>
           <div className="pattern">
               <div className="wrapper">
                   <header>
                       <img src="/hero.png" alt="Hero Banner"/>
                       <h1> Find <span className="text-gradient">Movies</span> you'll enjoy without Hassle</h1>
                       <Search searchTerm={searchTerm} setsearchTerm={setSearchTerm} />
                   </header>
                   {trendingMovies.length>0 && (
                       <section className="trending">
                           <ul>
                               {trendingMovies.map((movie,index)=>(
                                   <li key={movie.$id}>
                                        <p>{index + 1}</p>
                                       <img src={movie.poster_url} alt={movie.title}/>
                                   </li>
                               ))}
                           </ul>
                       </section>
                   )}
                   <section className="all-movies">
                       <h2> All movies</h2>
                       {Loading ? <Loader/> :
                       errorMessage ? (<p className="text-red-50">{errorMessage}</p>):
                           (<ul>
                               {movieList.map((movie)=>(
                                   <MovieCard key={movie.id} movie = {movie} />
                               ))}
                           </ul>
                       )}
                   </section>
               </div>
           </div>
       </main>
    )
}
export default App
