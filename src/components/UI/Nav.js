import { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);

  const navButtonHandler = () => setNavVisible(!navVisible);

  return (
    <>
      <button className={styles.mobileNavButton} onClick={navButtonHandler}>MENU</button>

      {navVisible && <nav className={styles.mobileNavContainer}>
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to="/about">About</Link>
          </li>
          {/*Services to add another time
          <li className={styles.mobileNavItem}>
            <Link to="/services">Services</Link>
          </li>
          */}
          <li className={styles.mobileNavItem}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>}

      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about">About</Link>
          </li>
          {/*Services to add another time
          <li className={styles.navItem}>
            <Link to="/services">Services</Link>
          </li>
          */}
          <li className={styles.navItem}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;