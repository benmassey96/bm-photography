import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from './PortfolioLink.module.css';

const PortfolioButton = () => {
  return (
    <button type="button" className={styles.backToPortfolio}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <Link to="/portfolio">Back to Portfolio</Link>
    </button>
  );
};

export default PortfolioButton;