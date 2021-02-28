import React from 'react';
import Directory from '../../components/directory/Directory';
import './HomePage.scss';


const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to Pavilion Style</h1>
            <Directory />
        </div>
    )
}


export default HomePage;