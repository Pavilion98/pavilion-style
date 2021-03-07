import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) => {
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
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            Sign Out
                        </div>
                    ) : (
                        <Link className='option' to='/signin'>
                            Sign In
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        currentUser: state.user.currentUser
    })
}

export default connect(mapStateToProps)(Header);