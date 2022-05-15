import { Link } from "react-router-dom";

import './styles.css';

function Error() {
    return (
        <div className="container">
            <div className="error-img"></div>
            <Link to={"/"}>Voltar</Link>
        </div>
    )
}

export default Error;