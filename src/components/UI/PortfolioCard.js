import { Link } from 'react-router-dom';
import styles from './PortfolioCard.module.css';

const PortfolioCard = props => {
  return (
    <div className={styles.portfolioCard}>
      <Link to={`/${props.link}`}>
        <img className={styles.portfolioImage} src={props.image} alt={props.title}/>
        <h3 className={styles.portfolioTitle}>{props.title}</h3>
      </Link>
    </div>
  );
};

export default PortfolioCard;