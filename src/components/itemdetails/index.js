import React from 'react';
import { useParams } from 'react-router-dom'; 
import items from '../../data.json'; // Importer le fichier JSON ici

function ItemDetails() {
    const { itemId } = useParams();
    const item = items.find(item => item.id === itemId); // Utiliser le fichier JSON importé

    if (!item) return <div>Item not found</div>; 

    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <img src={item.cover} alt={item.title} />
            <p>{item.description}</p>
            <p>Hosted by: {item.host.name}</p>
            <img src={item.host.picture} alt={item.host.name} />
            <p>Rating: {item.rating}</p>
            <p>Location: {item.location}</p>
            <ul>
                {item.equipments.map(equipment => (
                    <li key={equipment}>{equipment}</li>
                ))}
            </ul>
            <ul>
                {item.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <div>
                {item.pictures.map(picture => (
                    <img key={picture} src={picture} alt={item.title} />
                ))}
            </div>
        </div>
    );
}

export default ItemDetails;