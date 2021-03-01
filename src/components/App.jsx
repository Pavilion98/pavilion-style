import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import HatsPage from '../pages/hatsPage/HatsPage';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/hats" exact component= {HatsPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App;