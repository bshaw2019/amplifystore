import React from 'react'
// Amplify
import Amplify from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

// Amplify Configurations
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const Checkout = () => {
    const stripePromise = loadStripe('<stripe_public_key>');

    return (
        <section className="checkout-wrapper">
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
        </section>
    )
}

export default withAuthenticator(Checkout)
