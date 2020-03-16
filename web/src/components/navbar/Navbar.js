import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AmbevLogo from '../../assets/img/logo-ambev.png';

const Header = () => {
    return (
        <nav className='navbar'>
            <Link style={{ height: '90%' }} to='/'>
                <img src={AmbevLogo} alt='logo-ambev' />
            </Link>
        </nav>
    );
};

export default Header;
