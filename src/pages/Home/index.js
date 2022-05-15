import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../../services/api";

import "./styles.css";

function Home() {
    const KEY = '3d20de29e69a66f726bbf2805334c187';
    const LANG = 'pt-BR';

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            await api.get(`movie/now_playing?api_key=${KEY}&language=${LANG}`)
            .then((data) => {
                setMovies(data.data.results);
                setLoading(false)
            })
            .catch(error =>{
                console.log(error);
            });
        }
        loadMovies()
    }, []);


    if (loading) {
        return (
            <p className="loading">Loading...</p>
        )
    }


    return (
        <div className='container'>
            <div className='movie-list'>
                {
                    movies.map((movie, key) => (
                        <article key={key}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className="backdrop"/>
                            <Link to={`movie/${movie.id}`}>Acessar</Link>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;