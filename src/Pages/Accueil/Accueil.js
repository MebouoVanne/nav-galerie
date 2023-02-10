import React from 'react';
import Menu from '../../Menu';
import './Accueil.css';
import img from '../../image/img2.jpg';

const Accueil = () => {
    return (
        <div className='Accueil'>
            <Menu/>
            <h1>Accueil</h1>
            <h3>Bienvenue dans notre école de formation ! Nous sommes ravis de vous accueillir parmi nous et de vous offrir l'opportunité de développer vos compétences et de réaliser vos aspirations professionnelles.</h3>
            <img className='imgaccueil' src={img} alt="image"/>
            
    
        </div>
    );
};

export default Accueil;