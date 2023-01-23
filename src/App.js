import { React, useState } from 'react';
import Header from './components/Header'; 
import Movies from './components/Movies';

const App = () => {

  const [movies, setMovies] = useState([
    {
      id : 1,
      name : 'Movie 1',
      genre : 'Action, sci-fi',
      release : '1st jan 1990'
    },
    {
      id : 2,
      name : 'Movie 2',
      genre : 'Drama',
      release : '1st jan 2002'
    },
    {
      id : 3,
      name : 'Movie 3',
      genre : 'Romantic',
      release : '1st jan 2007'
    },
    {
      id : 4,
      name : 'Movie 4',
      genre : 'Drama',
      release : '1st jan 2002'
    },
    {
      id : 5,
      name : 'Movie 5',
      genre : 'Romantic',
      release : '1st jan 2007'
    },
  ])

  return (
    <div className="App">
      <Header title="MovieCon" />
      <Movies movies={movies} />
    </div>


  )
}

export default App; 