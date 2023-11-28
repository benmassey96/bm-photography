import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import NavButton from "./NavButton";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav)
  };

  const onNavLinkClick = () => {
    document.body.style.position = 'static'
  };

  return (
    <>
      <nav className={styles.mobileNavContainer}>
        {
          showNav && <ul id="mobileNav" className={styles.mobileNav} data-aos="fade-left" data-aos-delay="50" data-aos-duration="500">
            <Link onClick={onNavLinkClick} to="/" data-aos="fade-left" data-aos-delay="0" data-aos-duration="500">HOME</Link>
            <Link onClick={onNavLinkClick} to="/about" data-aos="fade-left" data-aos-delay="250" data-aos-duration="500">ABOUT</Link>
            <Link onClick={onNavLinkClick} to="/services" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">SERVICES</Link>
            <Link onClick={onNavLinkClick} to="/contact" data-aos="fade-left" data-aos-delay="750" data-aos-duration="500">CONTACT</Link>
          </ul>
        }
        <NavButton onShowNav={showNavHandler} toggled={showNav} />
      </nav> 
    </>
  )
}

export default Nav;