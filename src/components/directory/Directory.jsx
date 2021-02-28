import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';


class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://images.pexels.com/photos/1144721/pexels-photo-1144721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1
            },
            {
                title: 'Jackets',
                imageUrl: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1
            },
            {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3,
                size : 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 4,
                size : 'large'
            }]
        }
    }

    

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => {
                        return (
                            <MenuItem 
                            key={id} 
                            title = {title} 
                            imageUrl= {imageUrl}
                            size = {size}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Directory;