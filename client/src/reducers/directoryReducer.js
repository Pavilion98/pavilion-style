const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://images.pexels.com/photos/1144721/pexels-photo-1144721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'Jackets',
        imageUrl: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 1,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 3,
        size : 'large',
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 4,
        size : 'large',
        linkUrl: 'shop/mens'
    }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;