import { useState, useEffect } from 'react'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
import Movies from './components/Movies'; 
import SearchBar from './components/SearchBar';
import MovieForm from './components/MovieForm'; 

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMovieData = async () => {
      const data = await fetchAllMovies();
      setMovies(data);
    }

    getMovieData();

  }, []);

  const fetchAllMovies = async () => {
    let resMovies = await fetch('http://localhost:8000/movies');
    let res = await resMovies.json();
    return res;
  }

  const fetchMovie = async ( id ) => {
    let resMovie = await fetch(`http://localhost:8000/movies/${id}`);
    let res = await resMovie.json();
    return res;
  }

  const searchMe = (res) => {
    setMovies(movies.filter(movie => movie.name.toLowerCase().indexOf(res.toLowerCase()) !== -1));  
  }

  const addMovie = (obj) => { 
  }
  const deleteMe = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  }
  const myFavorite = (id) => {
    setMovies(movies.map(movie => (movie.id === id)? {...movie, fav:!movie.fav}:movie));
  }

  return (
    <div className="App">
      <Header title="MovieCon" />
      <div className="container">    
        <SearchBar searchMe={searchMe} />
        {showForm && <MovieForm addMovie={addMovie} />}
        <Movies movies={movies} deleteMe={deleteMe} myFavorite={myFavorite} />
      </div>
      <Footer copyright="All rights are reserved Funtechstic.com"/>
    </div>
  );
}

export default App; 
