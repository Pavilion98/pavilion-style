import React, { useState } from 'react';
// import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './SignIn.styles';

const SignIn = () => {

    const [ userCredentials, setCredentials ] = useState({ email: "", password: ""});

    const { email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = event => {
        const {name, value} = event.target;

        setCredentials({...userCredentials, [name]: value})
    }





    return (
        <SignInContainer>
            <SignInTitle>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            </SignInTitle>

            <form onSubmit={handleSubmit}> 
                <FormInput 
                name="email" 
                type="email" 
                value={email} 
                handleChange={handleChange}
                label = "email" 
                required 
                />

                <FormInput 
                name="password" 
                type="password" 
                value={password} 
                handleChange={handleChange}
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
};


export default SignIn;

