import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/index';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import SignInAndSignUp from '../pages/signInAndsignUp/SignInAndSignUp';
import Header from './header/Header';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';



class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });   
            }

            setCurrentUser(userAuth);
            
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
                        <Header />
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/shop" exact component={ShopPage}  />
                            <Route 
                            path="/signin" 
                            exact 
                            render= {() => this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUp />
                                )
                            } 
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return({
        currentUser: user.currentUser
    })
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);