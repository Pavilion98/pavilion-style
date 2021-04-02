import React from 'react';
// import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './SignIn.styles';

class SignIn extends React.Component {

    state = ({
        email: '',
        password: ''
    });


    handleSubmit = async event => {
        event.preventDefault();

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };


    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value})
    }
    render(){
        return (
            <SignInContainer>
                <SignInTitle>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                </SignInTitle>
    
                <form onSubmit={this.handleSubmit}> 
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label = "email" 
                    required 
                    />
    
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label = "password" 
                    required   
                    />
    
                    <ButtonsBarContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick= {signInWithGoogle} >Sign In with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
    
}


export default SignIn;

