import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate} from 'react-router-dom';
import Header from './components/header';
import MainContent from './pages/main-content';
import Footer from './footer';
import Banner from './components/banner';
import SlideShow from './components/slideshow'; // Importez le composant SlideShow ici
import ItemDetail from './components/itemdetails';
import AboutPage from './pages/AboutPages';
import defaultImage from './components/banner/bannerindex.png'; 
import ErrorPage from '../src/pages/errorpage';
import './pages/errorpage/errorpage.scss';
import'./components/slideshow/slideshow.scss';
import './App.scss';

function AppContent() {
    const location = useLocation();
    const hideBanner = location.pathname.includes('/slideshow') || location.pathname.includes('/about') || location.pathname.includes('/error');


    return (
        <div className="App">
            <Header />
            {!hideBanner && <Banner image={defaultImage} text="Chez vous, partout et ailleurs" />}
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/item/:itemId" element={<ItemDetail />} />
                <Route path="/slideshow/:itemId" element={<SlideShow />} />
                <Route path="*" element={<Navigate to="/errorpage" replace />} />
                
    <Route path="/errorpage" element={<ErrorPage />} />
    
            </Routes>
            <Footer />
        </div>
        
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;



