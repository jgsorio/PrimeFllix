import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header>
            <Link to={"/"} className="logo">Prime Flix</Link>
            <Link to={"/favorites"} className="favorites">Meus filmes</Link>
        </header>
    )
}

export default Header;