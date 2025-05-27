import React from 'react';
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Random from "../Components/Random";
import AdminDashboard from "../Layout/AdminDashboard";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AdminDashboard/>}/>
                <Route path="/dashboard" element={<Random/>}/>
                <Route path="/pharmacy" element={<Random/>}/>
                <Route path="/doctors" element={<Random/>}/>
                <Route path="/patients" element={<Random/>}/>
                <Route path="/appointments" element={<Random/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;