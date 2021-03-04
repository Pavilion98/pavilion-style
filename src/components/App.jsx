import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import SignInAndSignUp from '../pages/signInAndsignUp/SignInAndSignUp';
import Header from './header/Header';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';



class App extends React.Component {
    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });   
            }

            this.setState({currentUser: userAuth });
            
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header currentUser= {this.state.currentUser} />
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
}


export default App;