import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../actions/cart.selector';
import { toggleCartHidden } from '../../actions/index';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


// import './CartDropdown.scss';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './CartDropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
                    ) : (
                        <EmptyMessageContainer className='empty-message'>Your Cart is empty</EmptyMessageContainer>
                    )}
            </CartItemsContainer>
            <CartDropdownButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }} > 
            Go To Checkout
            </CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));