import React, { useState } from "react";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Actividades
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Apoyo
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Nosotros MX
        </ScrollLink>
      </li>
      <li className="dropdown">
        <Link to="/blog">Noticias</Link>
        <i
          className="fa fa-angle-down"
          onKeyDown={handleDropdownStatus}
          role="button"
          tabIndex="0"
          aria-label="dropdown toggler"
          onClick={handleDropdownStatus}
        ></i>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link to="/blog">News</Link>
          </li>
          <li>
            <Link to="/blog-post">News Details</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
