import Movie from './Movie';

const Movies = ({ movies }) => {
    return (
        <div className="movie-container">
        {(movies.length > 0) ?
            movies.map(movie => <Movie movie={movie} key={movie.id} />)
            : ' No movies available. '}
        </div>
    )
}

export default Movies;