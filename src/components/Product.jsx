import React, { useState } from "react";
import "./product.css";
import Cards from './Cards.jsx';
import Image from './img/t-shirt.jpg';

const Product = () => {
  
 
  return (
    <>
      <div className="product-container">
        <h1>Products of ViewWare</h1>
      <div className="product121-product">
      {products.map((product) => (
        <div key={product.id} className="product121-card">
          <Cards
            image={product.image}
            title={product.title}
            designer={product.designer}
            reviews={product.reviews}
            price={product.price}
            status={product.status}
            id={product.id}
          />
        </div>
      ))}
        </div>
      </div>
    </>
  );
};

export default Product  ;

const products = [

  { id: 1,
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {  
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    id: 3,
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  },
  {
    image: `${Image}`,
    title: "Blue T-Shirt",
    designer: "AI Karam",
    reviews: "4.1k",
    price: "5.50",
    status: "Almost Sold Out",
  }
]



    