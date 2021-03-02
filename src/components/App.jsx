import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import SignInAndSignUp from '../pages/signInAndsignUp/SignInAndSignUp';
import Header from './header/Header';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/shop" exact component={ShopPage}  />
                        <Route path="/signin" exact component={SignInAndSignUp} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App;