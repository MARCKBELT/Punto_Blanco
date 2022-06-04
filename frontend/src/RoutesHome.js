import React from 'react'

import Home from "./Core/Home.js"
import Search from "./Core/Search.js"

import { BrowserRouter, Route,Routes} from "react-router-dom"

const RoutesHome = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/Search" exact element={<Search/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesHome