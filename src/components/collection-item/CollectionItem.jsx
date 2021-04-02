import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../actions/index';
// import './CollectionItem.scss'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './CollectionItem.styles';


const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage  className="image" style = {{backgroundImage: `url(${imageUrl})`}} />

            <CollectionFooterContainer>
                <NameContainer> {name} </NameContainer>
                <PriceContainer> {price}$ </PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick = {() => addItem(item)} inverted> Add To Cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);