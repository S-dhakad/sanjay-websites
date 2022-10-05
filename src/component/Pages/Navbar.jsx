import React, { useRef } from "react";
import "../Style/Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  function responsive() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    style.current.classList.toggle("vcr");
    nav.current.classList.toggle("nav");
    vcr.current.classList.toggle("vcr");

    hidelogo.current.classList.toggle("hide");
  }
  const hidelogo = useRef("null");

  const style = useRef("null");
  const nav = useRef("null");
  const vcr = useRef("null");

  return (
    <>
      <nav className="navbar" ref={nav}>
        <strong className="spaninlined hide" ref={hidelogo}>
          <Link to="/">Code with S.D</Link>
        </strong>
        <div className="burger">
          <li onClick={responsive}>
            <GiHamburgerMenu />
          </li>
        </div>
        <ul className="ul" ref={style}>
          <li>
            <NavLink to="/" onClick={responsive}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/Services" onClick={responsive}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resume" onClick={responsive}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gallery" onClick={responsive}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={responsive}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="sm" ref={vcr}>
          <li onClick={responsive}>
            <NavLink
              to="//www.linkedin.com/in/mr-sanjay-dhakad-622b2a225"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin size={25} />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="//wa.me/+916263817082"
              onClick={responsive}
              rel="noreferrer"
              target="_blank"
            >
              <SiWhatsapp size={25} />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="mailto:mrsanjaydhakad986@gmail.com"
              onClick={responsive}
              rel="noreferrer"
              target="_blank"
            >
              <GrMail size={25} />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="phone">
        <li>
          <NavLink href="tel:+916263817082" title="Call Me">
            <FiPhoneCall />
          </NavLink>
        </li>
      </div>
    </>
  );
}
