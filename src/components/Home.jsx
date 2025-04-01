import React, { useState } from 'react';
import './home.css';
import m1Image from './img/m-2.png';
import m2Image from './img/m-3.png';
import Image from './img/t-shirt.jpg';
import Cards from './Cards.jsx';
import logo from './img/logo.png';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('mensFashion');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  
  return (
     <>
      <div className="add">
        <div className="box1">
          <img src="https://www.montecarlo.in/cdn/shop/files/224066022-2-38_5.jpg?v=1728468065&width=1080" alt="" />
        </div>
        <div className="box2">
          <img src="https://thumbs.dreamstime.com/b/group-young-men-stylish-jeans-near-light-wall-166154167.jpg" alt="" />
          <img src={m1Image} alt="" />
          <button  className = 'home-btn' onClick={() => handleCategoryClick('mensFashion')} style={{width: '150px', fontSize: '17px', backgroundColor: 'black' ,color: 'white'}}>Shop Now</button>
          <img src="https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/recruiter/216518623.jpg" alt="" />
        </div>
        <div className="box3">
          <img src="https://thehouseofrare.com/cdn/shop/files/NANTESOFFWHITE01526.webp?v=1734595841" alt="" />
        </div>
      </div>

       
      <div className="add2">
        <div className="text">
          <p>New Arrivals</p>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus consequatur pariatur nostrum perferendis dicta esse dignissimos facere natus, obcaecati impedit architecto asperiores corporis</h4>
        </div>
        <div className="KDbtn">
          <button className='bt' onClick={() => handleCategoryClick('womensFashion')}>Plain/Solid Color</button>
          <button className='bt' onClick={() => handleCategoryClick('womensAcc')}>Logo/Branded T-shirts</button>
          <button className='bt' onClick={() => handleCategoryClick('mensAcc')}>Patterned T-shirts</button>
        </div>

          <div className="product121">
          {selectedCategory && products[selectedCategory].map((product, index) => (
            <Cards 
              key={index}
              image={product.image}
              title={product.title}
              designer={product.designer}
              reviews={product.reviews}
              price={product.price}
              status={product.status}
              id={product.id}
            />
          ))}
        </div>



      </div>
        

      <div className="add3">
        <div className="text">
          <p>Follow Us On Instagram</p>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus consequatur pariatur nostrum perferendis dicta esse dignissimos facere natus, obcaecati impedit architecto asperiores corporis</h4>
        </div>
        <div className="im">
          <img src={m2Image} alt="" />
        </div>
      </div>

      <div className="add4">
        <img src="https://img.freepik.com/premium-photo/full-body-masculine-man-model-stylish-casual-clothes-white-background_962751-4549.jpg?w=360" alt="" />
        <div className="text2">
          <p>Subscribe To Our Newsletter</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odit perspiciatis nisi obcaecati voluptatem necessitatibus, voluptatibus alias debitis in blanditiis nemo! Atque, accusamus.</p>
          <p>xyz@gmail.com</p>
          <button>Subscribe Now</button>
        </div>
        <img src="https://thumbs.dreamstime.com/b/man-full-body-portrait-isolated-over-white-background-boy-t-shirt-jeans-arms-folded-man-full-body-portrait-white-142159826.jpg" alt="" />
      </div>

      <div className="line1"></div>

      <footer className='fot'>
        <div className="logo1">
          <img src={logo} alt="" />
        </div>
        <div className="links1">
          <ul>
            <li>Support Center</li>
            <li>Invoicing</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>FAQ's</li>
          </ul>
        </div>
      </footer>
</>
  );
}



const products = {

  mensFashion: [
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
    },
    // Add more men's fashion products here
  ],
  womensFashion: [
    { id:2,
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1217002161/photo/laughing-student-girl-wearing-white-t-shirt-and-blue-jeans-standing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=1J8VMwk4Rv46AUh7_xylKF1GgaRMG6xBhEZHYVGUiOY=",
      title: "Women T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    
  ],
  mensAcc: [
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://as2.ftcdn.net/v2/jpg/06/13/25/25/1000_F_613252550_NuRYuSHdVmTKOy9YHS1hUb8UGSnZZyqG.jpg",
      title: "Patterned T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    
  ],
  womensAcc: [
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
      title: "Logo T-shirt",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    
  ],
  discount: [
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    {
      image: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",
      title: "Discount",
      designer: "Jane Doe",
      reviews: "3.2k",
      price: "120.00",
      status: "In Stock",
    },
    
  ],
};
