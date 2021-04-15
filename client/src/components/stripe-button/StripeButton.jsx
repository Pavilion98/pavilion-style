import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
// import { response } from 'express';


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IWmGlKjTXx5rRoiGkStVwvM0v1UqHA91fZa8n9fCwAJOIRNJVni85JKezthbDN7HCdLcQwZ4gZkBl1E5WXaJTLi00jqVF4bCf';


    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then( response => {
            alert('Payment Successful')
        })
        .catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided credit card');
        });
    };

    return (
        <StripeCheckout 
            label="Pay Now!"
            name='Pavilion Styles Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description = {`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel = "Pay Now!"
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeButton;