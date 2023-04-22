import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import PortfolioLink from '../UI/PortfolioLink';
import Footer from '../UI/Footer';
import styles from './ProjectStyles.module.css';
import one from '../../images/deya/da2.JPG';
import two from '../../images/deya/da5.JPG';
import three from '../../images/deya/da11.JPG';
import four from '../../images/deya/da.JPG';
import five from '../../images/deya/da9.JPG';
import six from '../../images/deya/da4.JPG';
import seven from '../../images/deya/da6.JPG';
import eight from '../../images/deya/da8.JPG';
import nine from '../../images/deya/da12.JPG';
import ten from '../../images/deya/da13.JPG';
import eleven from '../../images/deya/da10.JPG';

const Deya = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <Nav />
      <Main>
        <h1>DEYA Brewing Co.</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={one} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={two} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={three} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={four} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={five} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={six} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={seven} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={eight} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={nine} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={ten} alt="DEYA Brewing Co." />
          <img className={styles.projectPhoto} src={eleven} alt="DEYA Brewing Co." />
        </div>

        <p className={styles.projectDesc}>One of the UK's biggest craft beer breweries, DEYA are based in Cheltenham and are experts at creating delicious modern beer recipes, in addition to developing and keeping alive traditional styles.
        
        <br/><br/>

        I visited their taproom in Cheltenham for the first time in a couple of years and couldn't help but capturing the atmosphere. The taproom itself had vastly expanded since I'd visited in 2019.

        </p>

        <PortfolioLink />
      </Main>

      <Footer />
    </>
  );
};

export default Deya;