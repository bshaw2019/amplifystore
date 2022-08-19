import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';

// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from './pages/Admin';
import UserProfile from './pages/UserProfile'
import AddProduct from './pages/AddProducts'
// Components
import Header from "./components/Header"
// Amplify Configurations
import awsExports from "./aws-exports";
import Dashboard from "./pages/Dashboard";
import About from "./pages/AboutUs";
import Roster from "./pages/Roster";
import MyBeats from "./pages/MyBeats";
import Orders from "./pages/Orders";
Amplify.configure(awsExports);

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/roster' element={<Roster/>} />
                <Route path='/beats' element={<MyBeats/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/cart' element={<Cart/>} />
                {/*<Route path='/dashboard/products/:id' element={<ProductDetails/>} />*/}
                <Route path='/dashboard/*' element={<Dashboard/>} />
                <Route path='/profile' element={<UserProfile/>} />
                <Route path='/orders' element={<Orders/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/products/:id' element={<ProductDetails/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}

//export default withAuthenticator(App);
export default App;
