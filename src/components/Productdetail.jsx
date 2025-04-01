import React from "react";
import { useParams } from "react-router-dom";
import './pd.css';
import { useState } from "react";
import products from "./ProductData";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';



const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [anable ,setAnable] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handleQuantityChange = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };
  function Model() {
    const { scene } = useGLTF(product.path); 
    return <primitive object={scene} scale={[1, 1, 1]}  position={[0, -1.7, 0]}/>;
  }

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <div className="img-product-details">

        {anable ? <div className="Three-produc-detail" >
      <div className="three" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,border:
        '2px solid black',width: '49vw' , height: '500px', flexDirection: 'column', borderRadius: '30px'
        }} >
            
        <Canvas  camera={{ position: [0, 1, 5], fov: 50 }} style={{height:'500px', width: '48vw', borderRadius: '30px'}}>  
            <ambientLight intensity={1.8} />
            <directionalLight position={[2, 2, 2]} />
            <Model />
            <OrbitControls enableZoom={true} enablePan={false}  minDistance={0.5}
                maxDistance={8} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                {/* <OrbitControls></OrbitControls> */}
        </Canvas>
        </div>
        </div>: <img src={product.image} alt={product.title} />}
      
        
      


       <div style={{
        display: 'flex',
        justifyContent: 'end'
       }}>

       <button style={{
        backgroundColor: 'black',
        color: 'white',
        margin: '10px',
        width: '150px',
        padding: '10px',
        borderRadius: '30px',
        cursor: 'pointer'
       }} onClick={()=>{ setAnable(false) }}>Normal View</button>
       <button style={{
        backgroundColor: 'black',
        color: 'white',
        margin: '10px',
        width: '150px',
        padding: '10px',
        borderRadius: '30px',
        cursor: 'pointer'
       }} onClick={()=>{ setAnable(true) }}>3D View</button>
       </div>

      </div>
      <div className="container-product-details">
      <h2>{product.title}</h2>
      <div className="product-details-container2">
        <div style={{
          width: '30vw',
          textAlign: 'center',
          margin: '10px'
        }}>
      <p>Designer: {product.designer}</p>
      <hr />
      <p>Reviews: {product.reviews}</p>
      <hr />
      <p>Price: ${product.price}</p>
      <hr />
      <p>Status: {product.status}</p>
      </div>
      </div>


      <div  style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <div className="quality-product">
      <div className="product-size-selector">
        <p>Size: </p>
        <div>
        {['S','M', 'L', 'XL', 'XXL'].map(size => (
          <button 
            key={size} 
            className={`size-button ${selectedSize === size ? 'active' : ''}`}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </button>
        ))}
        </div>
      </div>
      <hr />
      <div className="product-quantity-selector">
        <p>Quantity:</p>
        <div>
        <button className="quantity-button" onClick={() => handleQuantityChange(-1)}>-</button>
        <span className="quantity-value">{quantity}</span>
        <button className="quantity-button" onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      </div>
      </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: "20px"
      }}>
      <button className="btn-product-detail-addToCart" onClick={()=>{alert("Add to Cart")}}>Add to Cart</button>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
