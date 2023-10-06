import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import items from '../../data.json';
import DropdownContainer from '../../components/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function SlideShow() {
    const { itemId } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matchedItem, setMatchedItem] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const foundItem = items.find(item => item.id === itemId);
        if (!foundItem) {
            navigate('/error'); // redirige vers la page d'erreur si l'item n'est pas trouvé
            return;
        }
        setMatchedItem(foundItem);
    }, [itemId, navigate]);

   
   
    // Fonction pour générer les étoiles pour la notation.
    const getRatingStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="full-star" />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="empty-star" />);
        }
    }
    return stars;
};
 
    if (!matchedItem) return null;
   
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % matchedItem.pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + matchedItem.pictures.length) % matchedItem.pictures.length);
    }


    return (
        <div className="slideshow-container">
            <div className="image-container">
                <img src={matchedItem.pictures[currentIndex]} alt={matchedItem.title} />
                {matchedItem.pictures.length > 1 && (
                    <>
                        <button className="slide-button prev-button" onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                            </svg>
                        </button>
                        <button className="slide-button  next-button" onClick={nextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                            </svg>
                        </button>
                        <div className="slide-number">
                            {currentIndex + 1} / {matchedItem.pictures.length}
                        </div>
                    </>
                )}
            </div>
    
            <div className="details-container">
                <div className="left-container">
    <h1>{matchedItem.title}</h1>
    <p>{matchedItem.location}</p>
    <ul className="tags-list">
        {matchedItem.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
</div>
    
                <div className="right-container">
                    <div className="host-container">
                        <p className="host-name">{matchedItem.host.name}</p>
                        <img src={matchedItem.host.picture} alt={matchedItem.host.name} />
                    </div>
                    <div className="rating-container">
    
    {getRatingStars(Number(matchedItem.rating))}
</div>
                </div>
            </div>
    
            <div className="dropdown-container">
                <div className="drop1">
                <DropdownContainer title="Description" content={matchedItem.description} />
                </div>
                <div className="drop2">
                <DropdownContainer title="Équipements" content={matchedItem.equipments.join(', ')} />
                </div>
            </div>
        </div>

    )}

export default SlideShow;