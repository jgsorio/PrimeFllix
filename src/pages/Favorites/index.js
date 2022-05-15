import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './styles.css';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritesMovies = localStorage.getItem("@primeflix") || [];
        if (favoritesMovies.length > 0) {
            setFavorites(JSON.parse(favoritesMovies));
        }
    }, []);

    function deleteMovie(id) {
        let newFavorites = favorites.filter((movie) => movie.id != id);
        setFavorites(newFavorites)
        toast.success('O filme foi excluido com sucesso!');
        localStorage.setItem('@primeflix', JSON.stringify(newFavorites));
    }

    return (
        <>
            {
                favorites.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { 

                            favorites.map((movie, index) => (
                                <tr>
                                    <td key={index}>{movie.title}</td>
                                    <td className='actions'>
                                        <button onClick={() => deleteMovie(movie.id)} className='delete'>Excluir</button>
                                    </td>
                                </tr>
                            ))
                        
                        }
                        
                    </tbody>
                </table>
            }
            {
                favorites.length == 0 &&
                    <p>Nenhum filme na lista de favoritos</p>
            }
        </>
    )
}

export default Favorites;