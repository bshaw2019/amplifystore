import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from "./context/products";
import { ProducerProvider } from "./context/producers";
import { UserProvider } from "./context/users";
import { CartProvider } from './context/cart';
import {ProfileProvider} from "./context/profile";
// import {ProductDetailProvider} from "./context/productDetails";

import App from './App';
import './index.css';
// import './assets/main.css'

ReactDOM.render(
    <UserProvider>
        <ProducerProvider>
            <ProductProvider>
                    <ProfileProvider>
                        <CartProvider>
                            <React.StrictMode>
                                <App/>
                            </React.StrictMode>
                        </CartProvider>
                    </ProfileProvider>
            </ProductProvider>
        </ProducerProvider>
    </UserProvider>,
    document.getElementById('root')
);
