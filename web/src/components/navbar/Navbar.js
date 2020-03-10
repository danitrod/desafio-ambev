import React from 'react';
import './Navbar.css';
import AmbevLogo from '../../assets/img/logo-ambev.png';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={AmbevLogo} alt='logo-ambev' />
        </nav>
    );
};

export default Header;
