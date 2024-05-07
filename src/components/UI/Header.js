import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from "../../images/shutter-open-36.png";
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/"> <img className={styles.headerLogo} src={logo} alt="Ben Massey Photography Logo" /> </Link>

      <Nav />
    </header>
  )
}

export default Header;