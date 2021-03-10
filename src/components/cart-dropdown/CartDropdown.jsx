import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../actions/cart.selector';

import './CartDropdown.scss';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
                }
            </div>
            <CustomButton > Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
   cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);