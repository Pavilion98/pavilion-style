import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/shop" exact component={ShopPage}  />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App;