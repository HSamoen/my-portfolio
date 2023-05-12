import React, { useState } from "react";
import { Link } from "react-scroll";
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper" style={{marginTop:"30px"}}>
          
           <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <img
            src="https://i.ibb.co/KmZyq2K/signature.png"
            style={{ width: "15%", marginRight: "5px", marginLeft:"20px" }}
            alt=""
            />
            </Link>

            <ul id="menu">
            <li>
            <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Contacts
              </Link>
            </li>
           <a href="https://github.com/HSamoen" target="_blank">
           <img
            src="https://i.ibb.co/cNhZzfC/github-icon-removebg-preview.png"
            style={{ width: "4%", marginRight: "10px" , marginLeft:"20px"}}
            alt=""
          />
           </a>

          <a href="https://www.linkedin.com/in/hsamoen-eban/" target="_blank">
          <img
            src="https://i.ibb.co/hYx87Yg/linkedin-removebg-preview.png"
            style={{ width: "3.5%", marginTop:"20px"}}
            alt=""
          />
          </a>
          </ul>
        </div>
      </nav>

      <div
        className={`menuIcon ${isOpen ? "toggle" : ""}`}
        onClick={toggleMenu}
      >
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${isOpen ? "open" : ""}`}>
        <ul id="menu">
          <li>
          <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
          </li>
          <li>
          <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Projects
              </Link>
          </li>
          <li>
          <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Skills
              </Link>
          </li>
          <li>
          <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contacts
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

