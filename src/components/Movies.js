import Movie from './Movie';

const Movies = ({ movies, deleteMe, myFavorite }) => {
    return (
        <div>
        {(movies.length) ?
            <div className="movie-container">
            {movies.map(movie => <Movie movie={movie} key={movie.id} deleteMe={deleteMe} myFavorite={myFavorite}/>)}
            </div>
            : <h2>No movies available</h2>}
        </div>
    )
}

export default Movies;