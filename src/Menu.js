import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
            <ul className='liste'>
                <NavLink to='/'><li className='items'> Accueil</li></NavLink>
                <NavLink to='/Portofolio'><li className='items'> Portofolio</li></NavLink>
                <NavLink to='/Services'><li className='items'> Services</li></NavLink>
                <NavLink to='/Apropos'><li className='items'> A propos</li></NavLink>
                <NavLink to='/Contact'><li className='items'> Contact</li></NavLink>
            </ul>
        </div>
    );
};

export default Menu;