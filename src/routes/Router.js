import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";



const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productlist" element={<ProductList/>}/>
      <Route path="/detailspage/:id" element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router
