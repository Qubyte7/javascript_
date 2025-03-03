import Search from "./components/Search.jsx";
import {useState, useEffect} from "react";
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

    const fetchMovies = async () => {
        // while we are in the process of fetching we can do this
        setLoading(true);
        setErrorMessage('')
        try{
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint,API_OPTIONS)
            if(!response.ok){
                throw new Error("Could not fetch movies from API");
            }
            const data = await response.json();
            if(data.Response === 'False'){
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([])
                return;
            }
            // we are seeting our movielist with data we got from the api
            setMovieList(data.result || [])
        }catch(e){
            console.error("Error fetching Movies : "+ e);
            setErrorMessage("Error fetching Movies : "+e)
        }finally {
            setLoading(false);
        }
    }
    // we are calling the fetchmovies() function only at our first page load
    useEffect(() => {
        fetchMovies()
    },[])
    return (
       <main>
           <div className="patter">
               <div className="wrapper">
                   <header>
                       <img src="/hero.png" alt="Hero Banner"/>
                       <h1> Find <span className="text-gradient">Movies</span> you'll enjoy without Hassle</h1>
                       <Search searchTerm={searchTerm} setsearchTerm={setSearchTerm()} />
                   </header>
                   <section className="all-movies">
                       {errorMessage && <p className="error-message">{errorMessage}</p>}
                   </section>

               </div>
           </div>
       </main>
    )
}
export default App
