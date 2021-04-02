import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';
// import './CollectionPreview.scss';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './CollectionPreview.styles';

const CollectionPreview = ({items, title, history, match, routeName}) => (
        <CollectionPreviewContainer>
            <TitleContainer
            onClick={() => history.push(`${match.path}/${routeName}`)}
            > 
            {title.toUpperCase()} 
            </TitleContainer>
            <PreviewContainer>
                {
                    items.filter((item, idx) => idx < 4).map( item => (
                        <CollectionItem key={item.id} item= {item} />   
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );


export default withRouter(CollectionPreview);