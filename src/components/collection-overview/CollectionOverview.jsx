import React from 'react';
import './CollectionOverview.scss';
import CollectionPreview from '../collection-preview/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../actions/shop.selector';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
        {
            collections.map( ({id, ...otherCollectionProps}) => {
                return (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                )
            })
        }
    </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);