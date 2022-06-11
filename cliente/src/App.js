import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./componentes/Home/index.js"
import NavBar from "./componentes/NavBar"
import AddProduct from "./componentes/CrearProducto"
import EditProduct from "./componentes/EditProduct/index.js"
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes >
        <Route path="/" exact element={<Home/>} />

        <Route path="/AddProduct" exact element={<AddProduct/>} />

        <Route path="/EditProduct/:id" exact element={<EditProduct/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
