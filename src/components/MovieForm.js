import { useState } from 'react';
const MovieForm = ({addMovie}) => {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [fav, setFav] = useState(false);

    const saveMovie = (e) => {
        e.preventDefault(); 

        if(!name.length || name == 'undefined'){
            alert('Please enter valid movie name.');
        }

        addMovie({name, genre, year, fav});

        setName('');
        setGenre('');
        setYear('');
        setFav(false);
    }

    return (
        <form className="movie-form form" onSubmit={ saveMovie }>
            <h2>Add new movie</h2>
            <div className="form-control">  
                <label>Movie Name</label>
                <input type="text" />
            </div>
            <div className="form-control">  
                <label>Genre</label>
                <select>
                    <option value="">Select </option>
                    <option>Action</option>
                    <option>Advanture</option>
                    <option>Drama</option>
                    <option>Romantic</option>
                    <option>Sci-fi</option>
                </select>
            </div>
            <div className="form-control">  
                <label>Release year</label>
                <input type="text" />
            </div>
            <div className="form-control">  
                <label>Favorite</label>
                <input type="checkbox" />
            </div>
            <div className="form-control">  
                <input type="submit" value="Save Movie" className="btn" />
            </div>
            
        </form>
    )
}

export default MovieForm;