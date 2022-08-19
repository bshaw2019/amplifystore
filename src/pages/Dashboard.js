import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Producers from "./Producers";
import SideBar from "../components/SideBar";
import Error from "./Error";
import Users from "./Users";
import Products from "./Products";
import MyBeats from "./MyBeats";


const Dashboard = () => {

    return (
        <>
            <SideBar/>
            <Routes>
                <Route path='/' element={<MyBeats/>}/>
                <Route path='/beats' element={<MyBeats/>}/>
                <Route path='/producers' element={<Producers/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </>
    );
}

export default Dashboard;
