import React from 'react';
import './banner.scss';

function Banner({ image, text = "Chez vous, partout et ailleurs" }) {
    return (
        <div className="banner-container">
            <div className="banner">
            
                {image && <img src={image} alt="Bannière" />} 
                <h2 className="banner-text">{text}</h2>
            </div>
        </div>
    );
}

export default Banner;