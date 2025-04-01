import React from 'react';
import './nav.css';
import { useState } from "react";
import menu from './img/menu.png';
import logo from './img/logo.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LogContext } from '../context/LogContext';

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
 
  const value = useContext(LogContext);
  

  return (
    <>
    {isOpen && (
        <div className="mobile">
          <ul className="moblie-box">
            <li>
            <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "18px" , cursor: "pointer"}}>HOME</Link>
            </li>
            <li>
            <Link to="/shop" style={{ textDecoration: "none", color: "black", fontSize: "18px" , cursor: "pointer"}}>SHOP</Link>
            </li>
            <li>
              <a href="/" className="menu-link">CATEGORIES</a>
            </li>
            <li>
              <a href="/" className="menu-link">BRANDS</a>
            </li>
          </ul>
        </div>
      )}
    
    <div className='nav'>
        <img className="humburg" src={menu} alt="" onClick={() => setIsOpen(!isOpen)}/>
        
       <img src={logo} alt="" />
      <div className="logo">
      <ul>
        <li>
        <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "18px" , cursor: "pointer"}}>HOME</Link>
        </li> 
        <li>          
          <Link to="/product" style={{ textDecoration: "none", color: "black", fontSize: "18px" , cursor: "pointer"}}>PRODUCT</Link>
        </li>
        <li><Link to="/customize" style={{ textDecoration: "none", color: "black", fontSize: "18px" , cursor: "pointer"}}>CUSTOMIZE</Link></li>
      </ul>
      </div>
      <div className="search">
        <input type="text"  placeholder=' Search'/>
      </div>

      {value.profile === "user" ? (
        <div className="login">
        <Link to="/user" className="list-style">Profile</Link>
        <Link to="/" className="list-style" onClick={(e) => {value.setProfile("notuser")}}>Log out</Link>
    </div>
        ):(
      <div className="login">
        <Link to="/sign" className="list-style">Sign up</Link>
        <Link to="/log" className="list-style">Log in</Link>
      </div>

        )    
        }
    </div>
    </>
  )
}