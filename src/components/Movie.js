const Movie = ( { movie } ) => {
    return (
        <div className="movie">
            <h1>{movie.name}</h1>
            <span className="genre">{movie.genre}</span>
            <span className="release">{movie.release}</span>
        </div>
    )
}

export default Movie;