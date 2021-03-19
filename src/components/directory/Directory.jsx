import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

import { selectDirectorySections } from '../../actions/directory.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({title, imageUrl, id, size, linkUrl}) => {
                    return (
                        <MenuItem 
                        key={id} 
                        title = {title} 
                        imageUrl= {imageUrl}
                        size = {size}
                        linkUrl={linkUrl}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);