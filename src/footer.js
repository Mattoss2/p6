import React from 'react';
import './footer.scss'; // Si vous voulez ajouter des styles spécifiques pour votre footer
import logo from './logo.png'
function Footer() {
    return (
        <footer className="app-footer">
            <img src={logo} alt="Logo footer" /> 
            <p>&copy; {new Date().getFullYear()} Votre Kasa. All rights reserved.</p>
           
        </footer>
    );
}

export default Footer;