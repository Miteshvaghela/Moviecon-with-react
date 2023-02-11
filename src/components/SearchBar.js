const SearchBar = ({searchMe}) => {
    return (
        <form className="form search-form">
            <div className="form-control">
                <input type="text" placeholder='Search anything' onChangeCapture={e => searchMe(e.currentTarget.value)} />
            </div>
        </form>
    )
}

export default SearchBar;