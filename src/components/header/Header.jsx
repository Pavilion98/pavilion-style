import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                Pavilion Style
            </Link>
            <div className="options">
                <Link to="/shop" className="option" >
                    Shop
                </Link>
                <Link to="/shop" className="option">
                    Contact
                </Link>
                <Link to="/signin" className="option">
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default Header;