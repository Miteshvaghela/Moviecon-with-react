import React from 'react';

const SearchBar = ({searchMe, showMovieform}) => {
    return (
        <form className="form search-form">
            <div className="form-control">
                <input type="text" placeholder='Search movie' onChangeCapture={e => searchMe(e.currentTarget.value)} />
            </div>
            <div><button className="btn" onClick={e => {showMovieform(e)}}>Add Movie</button></div>
        </form>
    )
}

export default SearchBar;