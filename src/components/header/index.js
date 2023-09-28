import { Link } from 'react-router-dom';
import logo from './logo.svg';

import './Header.scss';

function Header() {
    return (
        <header className="app-header">
            
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="Mon Logo" />
            </div>

            {/* Navigation */}
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </nav>


        </header>
    );
}

export default Header;