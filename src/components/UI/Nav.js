import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import NavButton from "./NavButton";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav)
  };

  return (
    <>
      <NavButton onShowNav={showNavHandler} />
      <nav className={styles.mobileNavContainer}>
        <ul className={styles.mobileNav}>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav;