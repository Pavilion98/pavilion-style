import React from 'react';
import './CartIcon.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions/index';
import { selectCartItemsCount } from '../../actions/cart.selector';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick= {toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);