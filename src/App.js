import { React, useState } from 'react';
import Header from './components/Header'; 
import Movies from './components/Movies';
import SearchBar from './components/SearchBar'; 
import MovieForm from './components/MovieForm'; 

const App = () => {

  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([
    {
      id : 1,
      name : 'Movie 1',
      genre : 'Action, sci-fi',
      release : '1990',
      fav: true
    },
    {
      id : 2,
      name : 'Movie 2',
      genre : 'Drama',
      release : '2002',
      fav: false
    },
    {
      id : 3,
      name : 'Movie 3',
      genre : 'Romantic',
      release : '2007',
      fav: true
    },
    {
      id : 4,
      name : 'Movie 4',
      genre : 'Drama',
      release : '2002',
      fav: false
    },
    {
      id : 5,
      name : 'Movie 5',
      genre : 'Romantic',
      release : '2007',
      fav: false
    },
  ])

  const searchMe = (res) => {
    let t = res;
    setTerm(t);
    console.log(term);
    setMovies(movies.filter(movie => movie.name.toLowerCase().includes(t))); 
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
      {showForm && <MovieForm />}
      <Movies movies={movies} deleteMe={deleteMe} myFavorite={myFavorite} />
    </div>


  )
}

export default App; 