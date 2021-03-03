import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({items, title, id}) => {
    return (
        <div className="collection-preview">
            <h2 className="title"> {title.toUpperCase()} </h2>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map( ({id, ...otherItemProps}) => {
                        return (
                            <CollectionItem key={id} {...otherItemProps} />
                        )    
                })
                }
            </div>
        </div>
    )
}


export default CollectionPreview;