import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import MovieForm from './components/MovieForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const data = await fetchAllMovies(term);
      setMovies(data);
    }
    getMovieData();
  });
  
  const fetchAllMovies = async (term) => {
    let resMovies = await fetch('http://localhost:8000/movies');
    let res = await resMovies.json();    
    if(term.length){
      return res.filter(movie => movie.title.toLowerCase().includes(term.trim().toLowerCase()));  
    }else{
      return res;
    }
  } 

  const searchMe = (res) => {    
    setTerm(res);
    console.log(res);
  }
  
  const fetchMovie = async ( id ) => {
    let resMovie = await fetch(`http://localhost:8000/movies/${id}`);
    let res = await resMovie.json();
    return res;
  }

  const showMovieform = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  }

  const addMovie = async (obj) => { 
    if(typeof obj === 'object'){     

      // post to api 
      obj.title = obj.title.trim();

      await fetch('http://localhost:8000/movies', {
        method : 'post',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(obj)
      });
      setMovies([...movies, obj]);
    }
  }

  const deleteMe = async (id) => {
    await fetch(`http://localhost:8000/movies/${id}`, {
      method : 'DELETE'
    })
    setMovies(movies.filter(movie => movie.id !== id));
  }

  const myFavorite = async (id) => {
    const movie = await fetchMovie(id);
    if(typeof movie === 'object'){
      movie.favorite = !movie.favorite;
    }
    await fetch(`http://localhost:8000/movies/${id}`,{
      method : 'put',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(movie)
    });
    setMovies(movies.map(movie => (movie.id === id)? {...movie, favorite:!movie.favorite}:movie));
  }
  
  return (
    <div className="App">
      <Header title="MovieCon"/>
      <div className="container">    
        <SearchBar searchMe={searchMe} showMovieform={showMovieform}/>
        {showForm && <MovieForm addMovie={addMovie} />}
        <Movies movies={movies} deleteMe={deleteMe} myFavorite={myFavorite} />
      </div>
      <Footer copyright="All rights are reserved Funtechstic.com"/>
    </div>
  );
}

export default App;