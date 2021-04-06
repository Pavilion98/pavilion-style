import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

// import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../actions/cart.selector';
import { selectCurrentUser } from '../../actions/user.selector';

import 
{   HeaderContainer,
    LogoContainer,
    HeaderIcon,
    OptionsContainer,
    OptionLink
} 
from './Header.styles';


const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <HeaderIcon />  <h3>Pavilion Style</h3>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                <OptionLink to="/shop">
                    Contact
                </OptionLink>
                {
                    currentUser ? (
                        <OptionLink as='div' onClick={() => auth.signOut()}>
                            Sign Out
                        </OptionLink>
                    ) : (
                        <OptionLink to='/signin'>
                            Sign In
                        </OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    });

export default connect(mapStateToProps)(Header);