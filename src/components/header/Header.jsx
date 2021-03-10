import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../actions/cart.selector';
import { selectCurrentUser } from '../../actions/user.selector';


const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    });

export default connect(mapStateToProps)(Header);