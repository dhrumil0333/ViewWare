import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Sign from './components/Sign';
import Login from './components/Login';
import { LogProvider } from "./context/LogContext";
import Profile from './components/Profile';
import ProductDetails from './components/Productdetail';
import Customize from './components/Customize';

function App() {

  return (
    <>
    <LogProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/log" element={<Login />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/customize" element={<Customize />} />

      </Routes>
    </Router>

    </LogProvider>
    </>
  )
}

export default App
