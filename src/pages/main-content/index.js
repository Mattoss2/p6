import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importer Link ici avec les autres imports de 'react-router-dom'
import './main-content.scss';
import items from '../../data.json';
import ItemDetails from '../../components/itemdetails';// Assurez-vous que le chemin d'import est correct

function MainContent() {
    return (
        <main className="app-main-content">
            <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path="/item/:itemId" element={<ItemDetails />} />
            </Routes>
        </main>
    );
}

function MainContainer() {
    return (
        <div className="main-container">
            <CardContainer />
        </div>
    );
}

function CardContainer() {
    return (
        <div className="card-container">
            {items.map(item => (
                <Link to={`/slideshow/${item.id}`} key={item.id} className="card">
                    <h3>{item.title}</h3>
                    <img src={item.cover} alt={item.title} className="card-cover" />
                </Link>
            ))}
        </div>
    );
}

export default MainContent;