import { useState, useEffect } from 'react'; 
import Header from './components/Header'; 
import Movies from './components/Movies'; 
import SearchBar from './components/SearchBar';
import MovieForm from './components/MovieForm'; 

const App = () => {
  const MOVIES = [
    {
      id : 1,
      name : 'Spiderman',
      genre : 'Action, sci-fi',
      release : '1990',
      fav: true
    },
    {
      id : 2,
      name : 'Superman',
      genre : 'Action',
      release : '2002',
      fav: false
    },
    {
      id : 3,
      name : 'Avatar 1',
      genre : 'Sci-fi',
      release : '2007',
      fav: true
    }
  ];
  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState(MOVIES);

  const searchMe = (res) => {
    setMovies(MOVIES.filter(movie => movie.name.toLowerCase().indexOf(res.toLowerCase()) !== -1));  
  }

  const addMovie = (obj) => {
    console.log(obj); 
    //setMovies([...movies, obj]);
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
      <SearchBar searchMe={searchMe} />
      {showForm && <MovieForm addMovie={addMovie} />}
      <Movies movies={movies} deleteMe={deleteMe} myFavorite={myFavorite} />
    </div>
  );
}

export default App; 