import React from 'react';
// import './CollectionOverview.scss';
import CollectionPreview from '../collection-preview/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../actions/shop.selector';

import { CollectionsOverviewContainer } from './CollectionOverview.styles';


const CollectionOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
        {
            collections.map( ({id, ...otherCollectionProps}) => {
                return (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                )
            })
        }
    </CollectionsOverviewContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);