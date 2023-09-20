import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <header className="app-header">
            <img src="/mon-app/public/logo.png" alt="logo" /> 
            {/*navigation*/}
            <nav id="nav" role="navigation">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
