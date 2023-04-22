import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <a href='https://www.instagram.com/benmasseyphotos/' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
      <div id="footerNav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;