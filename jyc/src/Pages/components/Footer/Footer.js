import React, { useState } from "react";
import "./Footer.css";
import logojyc from "./Images/logojyc.png";
import logotmp from "./Images/logotmp.png";
import { Link } from 'react-router-dom';

function Footer() {
  //for 1st
  const [isOpen1, setIsOpen1] = useState(false)

  const onClickFooter1 = () => {
    setIsOpen1(!isOpen1);
  }

  //for 2nd
  const [isOpen2, setIsOpen2] = useState(false)

  const onClickFooter2 = () => {
    setIsOpen2(!isOpen2);
  }

  //for 3rd
  const [isOpen3, setIsOpen3] = useState(false)

  const onClickFooter3 = () => {
    setIsOpen3(!isOpen3);
  }

  //for 4th
  const [isOpen4, setIsOpen4] = useState(false)

  const onClickFooter4 = () => {
    setIsOpen4(!isOpen4);
  }




  return (
    <footer className="footer-content">
      <div className="footer-wrapper">
        <div className="footer-links-wrapper">
          <div></div>
          <div className="jyc-tmp">
            <div className="jyc">
              <div className="logojyc">
                <img className="footer-logojyc" src={logojyc} />
              </div>
              <div className="jyc-text">
                JUIT Youth Club (JYC) is the name <br />
                of enthusiasm, development, <br /> consistency and effort.
              </div>
            </div>
            <div className="tmp">
              <div className="logotmp">
                <img className="footer-logotmp" src={logotmp} />
              </div>
              <div>
                {" "}
                Managed by Technical <br /> Sciences, Movies and <br />{" "}
                Photography club
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={`links-wrapper-1 ${isOpen1 ? 'links-wrapper-1-active' : ''} `}>
            <div className="footer-heading"><div className="footer-heading-m">CLUBS</div>
              <div onClick={onClickFooter1} className="more-options-m">+</div></div>
            <ul>
              <li>
              <Link to='//www.google.com'>Technical Sciences, Movies and Photography</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Environment, Ecology and Health</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Literary and Debating</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Theater and Music</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Cultural and Dance</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Sports</Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-2 ${isOpen2 ? 'links-wrapper-2-active' : ''} `}>
            <div className="footer-heading"><div className="footer-heading-m">COMMITTEES</div>
              <div onClick={onClickFooter2} className="more-options-m">+</div></div>
            <ul>
              <li>
                <Link to='//www.google.com'>Procurement and Event Management</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Registration and Hospitality</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Media and Publicity</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Creative Arts</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Disciplinary</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Finance</Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-3 ${isOpen3 ? 'links-wrapper-3-active' : ''} `}>
            <div className="footer-heading">
              <div className="footer-heading-m">CONTACT US</div>
              <div onClick={onClickFooter3} className="more-options-m">+</div>
            </div>
            <ul>
              <li>
                <a href="mailto:president.jyc@juitsolan.in">JYC President - president.jyc@juitsolan.in</a>
              </li>
              <li>
                <a href='mailto:jycphotographyclub1@gmail.com'>Support - jycphotographyclub1@gmail.com</a>
              </li>
              <li>
                <Link to='//www.google.com'>
                  Address - Waknaghat, P.O. Waknaghat, Teh Kandaghat, Distt.
                  Solan PIN-173 234 (H.P.), India
                </Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-4 ${isOpen4 ? 'links-wrapper-4-active' : ''} `}>
            <div className="footer-heading">
              <div className="footer-heading-m">FOLLOW US</div>
              <div onClick={onClickFooter4} className="more-options-m">+</div>
            </div>
            <ul>
              <li>
                <Link to='//www.google.com'>Facebook</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Instagram</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Twitter</Link>
              </li>
              <li>
                <Link to='//www.google.com'>Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            Copyright &copy; 2022 JYC All rights reserved.
          </div>
          <div className="social-icons">
            <Link to='//www.google.com'><i class="fab fa-facebook"></i></Link>
            <Link to='//www.google.com'><i class="fab fa-instagram"></i></Link>
            <Link to='//www.google.com'><i class="fab fa-linkedin"></i></Link>
            <Link to='//www.google.com'><i class="fab fa-twitter"></i></Link>
          </div>
          <div className="footer-option-name">
            <Link to='teams'>
              Team </Link>
            |
            <Link to='//www.google.com'> Certification </Link>
            <Link to='//www.google.com'>
              | Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
