import React from 'react';
import './banner.scss';

function Banner({ image, text = "Chez vous, partout et ailleurs" }) {
    return (
        <div className="banner-container">
            <div className="banner">
            
                         <h2 className="banner-text">{text}</h2>
                        <img src={image} alt="Bannière" />
                           
            </div>
        </div>
    );
}

export default Banner;