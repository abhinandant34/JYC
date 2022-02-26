import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logojyc from "./images/logojyc.png";
import { Cross as Hamburger } from 'hamburger-react';


function Header() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false)


  const [isOpen1,setIsOpen1]=useState(false)

  const onClickHeader=()=>{
    setIsOpen1(!isOpen1);
  }
  return (
    <div className={header ? "header active" : "header"}>
      <div className={`header-wrapper ${isOpen1 ? 'header-wrapper active':''} `}>
     
          <div className="header-logojyc">
            <img className="header-logo" src={logojyc} />
          </div>
          
          <div onClick={onClickHeader} className="menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
  
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/">ABOUT</Link>
            </li>

            <li>
              <Link to="events">EVENTS</Link>
            </li>

            <li>
              <Link to="/">CERTIFICATION</Link>
            </li>

            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
