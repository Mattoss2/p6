import React from 'react';
import Banner from '../../components/banner'; // Importer le composant Banner
import aboutImage from './aboutbanner.png'; 
import DropdownContainer from '../../components/dropdown'; // Ajustez le chemin d'accès en fonction de votre structure de dossiers
import '../AboutPages/AboutPages.scss';
function AboutPage() {
    console.log("Image utilisée dans AboutPage:", aboutImage); // Log l'image utilisée
    

   

    return (
        <div className="about-page">
           <Banner image={aboutImage} text="Chez vous, partout et ailleurs" />
           <DropdownContainer className="custom-dropdown" title={"Service"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"} />
           <DropdownContainer className="custom-dropdown" title={"Respect"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme"}/>
           <DropdownContainer className="custom-dropdown" title={"Service"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme"}/>
           <DropdownContainer className="custom-dropdown"title={"Sécurité"} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
        </div>
    );
}

export default AboutPage;

