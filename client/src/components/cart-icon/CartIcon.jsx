import React from 'react';
// import './CartIcon.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions/index';
import { selectCartItemsCount } from '../../actions/cart.selector';
import { createStructuredSelector } from 'reselect';




import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './CartIcon.styles';



const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartContainer onClick= {toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCountContainer className='item-count'> {itemCount} </ItemCountContainer>
        </CartContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);