import React from 'react'; 

const SearchBar = ({searchMe}) => {
    return (
        <form className="form search-form">
            <div className="form-control">
                <input type="text" placeholder='Search anything' onChange={e => searchMe(e.currentTarget.value)} />
            </div>
        </form>
    )
}

export default SearchBar;