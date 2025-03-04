import Search from "./components/Search.jsx";
import {useState, useEffect} from "react";
import Loader from "./components/Loader.jsx";
import MovieCard from "./components/MovieCard.jsx";
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
    const [Loading, setLoading] = useState(false);

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
        }catch(e){
            console.error("Error fetching Movies : "+ e);
            setErrorMessage("Error fetching Movies : "+e)
        }finally {
            setLoading(false);
        }
    }
    // we are calling the fetchmovies() function only at our first page load
    useEffect(() => {
        fetchMovies(searchTerm)
    },[searchTerm])

    return (
       <main>
           <div className="pattern">
               <div className="wrapper">
                   <header>
                       <img src="/hero.png" alt="Hero Banner"/>
                       <h1> Find <span className="text-gradient">Movies</span> you'll enjoy without Hassle</h1>
                       <Search searchTerm={searchTerm} setsearchTerm={setSearchTerm} />
                   </header>
                   <section className="all-movies">
                       <h2 className="mt-[40px]"> All movies</h2>
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
