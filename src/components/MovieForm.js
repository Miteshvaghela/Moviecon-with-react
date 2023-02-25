import { React, useState } from 'react';
const MovieForm = ({addMovie}) => {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [favorite, setFavorite] = useState(false);
    const saveMovie = (e) => {
        e.preventDefault();
        if(!title.length || title == 'undefined'){
            alert('Please enter valid movie name.');
            return;
        }
        const id = Math.floor(Math.random() * 1000) + 1;
        addMovie({id, title, genre, year, favorite});
        setTitle('');
        setGenre('');
        setYear('');
        setFavorite(false);
    }
    return (
        <form className="movie-form form" onSubmit={ saveMovie }>
            <h2>Add new movie</h2>
            <div className="form-control">  
                <label>Movie Name</label>
                <input type="text" placeholder='Movie name' value={title} onChange={e => setTitle(e.currentTarget.value)
                } required />
            </div>
            <div className="form-control">  
                <label>Genre</label>
                <select required onChange={e => setGenre(e.currentTarget.value) }>
                    <option value="">Select </option>
                    <option value="action">Action</option>
                    <option value="advanture">Advanture</option>
                    <option value="drama">Drama</option>
                    <option value="romantic">Romantic</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="horror">Horror</option>
                </select>
            </div>
            <div className="form-control">  
                <label>Release year</label>
                <input type="number" required value={year} onChange={e => setYear(e.currentTarget.value)
                } />
            </div>
            <div className="form-control">  
                <label>Favorite</label>
                <input type="checkbox" checked={favorite} onChange={e => setFavorite(e.currentTarget.checked)
                }/>
            </div>
            <div className="form-control">  
                <input type="submit" value="Save Movie" className="btn" />
            </div>
            
        </form>
    )
}

export default MovieForm;