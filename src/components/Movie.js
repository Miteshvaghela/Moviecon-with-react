import { FaTimes } from 'react-icons/fa';

const Movie = ( { movie, deleteMe, myFavorite } ) => {
    return (
        <div className={`movie ${movie.fav?'favorite':''}`} onDoubleClick={e => myFavorite(movie.id)}>
            <FaTimes className="close" style={{color:'red', cursor:'pointer'}} onClick={e => deleteMe(movie.id)}/>
            <h1>{movie.title}</h1>
            <h4>Genre : {movie.genre}</h4>
            <h4>Release year : {movie.year}</h4>
        </div>
    )
}

export default Movie;