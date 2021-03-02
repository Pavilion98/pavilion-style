import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

const SignIn = () => {

    const [input, setInput] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = event => {
        event.preventDefault();

        setInput({email: '', password: ''})
    }


    const handleChange = event => {
        const {name, value} = event.target;

        setInput({ [name]: value})
    }


    return (
        <div className="sign-in">
            <div className="title">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            </div>

            <form onSubmit={handleSubmit}> 
                <FormInput 
                name="email" 
                type="email" 
                value={input.email} 
                handleChange={handleChange}
                label = "email" 
                required 
                />

                <FormInput 
                name="password" 
                type="password" 
                value={input.password} 
                handleChange={handleChange}
                label = "password" 
                required   
                />

                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </div>
    )
    
}


export default SignIn;

