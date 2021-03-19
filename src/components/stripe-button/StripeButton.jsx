import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IWmGlKjTXx5rRoiGkStVwvM0v1UqHA91fZa8n9fCwAJOIRNJVni85JKezthbDN7HCdLcQwZ4gZkBl1E5WXaJTLi00jqVF4bCf';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

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