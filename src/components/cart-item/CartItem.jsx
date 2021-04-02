import React from 'react';
// import './CartItem.scss';

import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
  } from './CartItem.styles';

const CartItem = ({ item }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={item.imageUrl} alt='item' />
            <ItemDetailsContainer>
                <span className='name'> {item.name} </span>
                <span className="price">{item.quantity} x ${ item.price } </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;