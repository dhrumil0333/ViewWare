// ProductCard.js
import React from 'react';  
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id,image, title, designer, reviews, price, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate(`/product/${id}`)
  }
  
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={title} />
      <div className="detail">
        <p>{title}</p>
        <p>{designer}</p>
        <p>({reviews}) Customer Reviews</p>
        <div className="price">
          <p>${price}</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;