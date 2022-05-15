import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import './styles.css';

function Movie() {
    const KEY = '3d20de29e69a66f726bbf2805334c187';
    const LANG = 'pt-BR';
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const navigate = useNavigate();

    function moveToFavorites() {
        const myList = JSON.parse(localStorage.getItem("@primeflix")) || [];

        const hasMovie = myList.some((savedMovies) => savedMovies.id == movie.id);

        if (!hasMovie) {
            myList.push(movie);
            toast.success("Filme salvo com sucesso!")
            localStorage.setItem("@primeflix", JSON.stringify(myList));
            return;
        }

        toast.warning("Esse filme já está nos seus favoritos");
    }

    useEffect(() => {

        async function loadMovie() {
            await api.get(`movie/${id}?api_key=${KEY}&language=${LANG}`)
            .then((data) => {
                setMovie(data.data);
            })
            .catch(error => {
                navigate("/")
            });
        }

        loadMovie();
    }, null)
    return (
        <div className='container-movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
            <div className='movie-description'>
                <h2>{movie.title}</h2><br></br>
                <p><b>Sinopse:</b> <br/>{movie.overview}</p><br></br>
                <p><b>Nota:</b> {movie.vote_average}</p>
                <br></br>
                <div className='actions'>
                    <a href={`https://www.youtube.com/results?search_query=${movie.title} Trailer`} target="_blank" className="btn-trailer">Assistir Trailer</a>
                    <button onClick={moveToFavorites} className="btn-favorite">Favoritar</button>
                </div>
            </div>
        </div>
    )
}

export default Movie;