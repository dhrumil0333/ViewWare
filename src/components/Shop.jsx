import React from 'react';
import { useState, useRef, useEffect} from "react";
import './shop.css';

export default function Shop() {

    const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  let menuRef1 = useRef(null);
  let menuRef2 = useRef(null);

  function toggleDropdown(menuNumber) {
    if (menuNumber === 1) {
      setIsMenuOpen1((prev) => !prev);
      setIsMenuOpen2(false); // Close the other menu
    } else if (menuNumber === 2) {
      setIsMenuOpen2((prev) => !prev);
      setIsMenuOpen1(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef1.current && !menuRef1.current.contains(event.target)) {
        setIsMenuOpen1(false);
      }
      if (menuRef2.current && !menuRef2.current.contains(event.target)) {
        setIsMenuOpen2(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  
    return (
        <>
            <div className="con">
                <aside className="filters1">
                    <h2>Filters</h2>

                    <div className="filter1-group">
                        <h3>Size</h3>
                        <button className="size-filter1">S</button>
                        <button className="size-filter1">M</button>
                        <button className="size-filter1">L</button>
                        <button className="size-filter1">XL</button>
                    </div>


                    <div className="filter1-group">
                        <h3>Prices</h3>
                        <ul>
                            <li><a href="#">$0 - $50</a></li>
                            <li><a href="#">$50 - $100</a></li>
                            <li><a href="#">$100 - $150</a></li>
                            <li><a href="#">$150 - $200</a></li>
                            <li><a href="#">$300 - $400</a></li>
                        </ul>
                    </div>

                    {/* <div className="filter1-group" onClick={() => toggleDropdown(1)}>
            <h3 className="dropdown1">Brands <Arrow /></h3>
            <ul
              className="dropdown1-menu"
              ref={menuRef1}
              style={{ display: isMenuOpen1 ? "block" : "none" }}
            >
              <li>
                <a href="#">Minimog</a>
              </li>
              <li>
                <a href="#">Retrolle Brook</a>
              </li>
              <li>
                <a href="#">Learts</a>
              </li>
              <li>
                <a href="#">Vagabond</a>
              </li>
              <li>
                <a href="#">Abby</a>
              </li>
            </ul>
          </div> */}

          {/* Collections Dropdown */}
          {/* <div className="filter1-group" onClick={() => toggleDropdown(2)}>
            <h3 className="dropdown1">
              Collections <Arrow />
            </h3>
            <ul
              className="dropdown1-menu"
              ref={menuRef2}
              style={{ display: isMenuOpen2 ? "block" : "none" }}
            >
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div> */}

                </aside>



                <main className="product-grid">
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Linen-blend Shirt</h4><p>$17.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Rounded Red Hat</h4><p>$8.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Long-sleeve Coat</h4><p>$106.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Boxy Denim Hat</h4><p>$25.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Linen Plain Top</h4><p>$25.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Oversized T-shirt</h4><p>$11.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Polarised Sunglasses</h4><p>$18.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Rockstar Jacket</h4><p>$92.00</p></div>
                    <div className="product1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGmw-GktC7nGOBSij8yuaJaras1KZTCGMQ&s" /><h4>Dotted Black Dress</h4><p>$20.00</p></div>
                </main>
            </div>


        </>
    )
}
