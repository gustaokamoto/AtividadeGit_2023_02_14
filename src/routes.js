import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/navBar'
import Pag from './components/demografia/demografia'

function MainRoutes(){ 
    return (
        <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/demografia" element={<Pag />} />
        </Routes>
    )
}

export default MainRoutes;