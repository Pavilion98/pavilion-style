import React from 'react';
import MenuItem from '../menu-item/MenuItem';
// import './directory.styles.scss';

import { selectDirectorySections } from '../../actions/directory.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { DirectoryMenuContainer } from './Directory.styles';

const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
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
        </DirectoryMenuContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);