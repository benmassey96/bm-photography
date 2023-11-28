import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/shutter-open-24.png';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerDivider}>
        <span className={styles.footerDividerTop}></span>
        <span className={styles.footerDividerBottom}></span>
      </div>

      <Link to="/"> <img className={styles.footerLogo} src={logo} alt="Ben Massey Photography Logo" /> </Link>

      <h4 className={styles.connectInsta}>Connect with me on Instagram!</h4>
      <a href="https://www.instagram.com/benmasseyphotos/"><FontAwesomeIcon icon={faInstagram} /> benmasseyphotos</a>
      
      <ul className={styles.footerNav}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
      </ul>
      
      <a className={styles.contactLink} href="mailto:hello@benmassey.co.uk">hello@benmassey.co.uk</a>

      <p className={styles.copyright}>Copyright © 2023 Ben Massey. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;