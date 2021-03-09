import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';


class Directory extends React.Component {

    state = {
        sections: [{
            title: 'hats',
            imageUrl: 'https://images.pexels.com/photos/1144721/pexels-photo-1144721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'sneakers',
            imageUrl: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 1,
            linkUrl: ''
        },
        {
            title: 'womens',
            imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 3,
            size : 'large',
            linkUrl: ''
        },
        {
            title: 'mens',
            imageUrl: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 4,
            size : 'large',
            linkUrl: ''
        }]
    }

    

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => {
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
}

export default Directory;