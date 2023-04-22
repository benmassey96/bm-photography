import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import PortfolioLink from '../UI/PortfolioLink';
import Footer from '../UI/Footer';
import styles from './ProjectStyles.module.css';
import one from '../../images/marches/mch7.jpg';
import two from '../../images/marches/mch4.jpg';
import three from '../../images/marches/mch6.jpg';
import four from '../../images/marches/mch9.jpg';
import five from '../../images/marches/mch5.jpg';
import six from '../../images/marches/mch2.jpg';
import seven from '../../images/marches/mch3.jpg';

const Marches = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <Nav />
      <Main>
        <h1>The New Marches</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={one} alt="The New Marches" />
          <img className={styles.projectPhoto} src={two} alt="The New Marches" />
          <img className={styles.projectPhoto} src={three} alt="The New Marches" />
          <img className={styles.projectPhoto} src={four} alt="The New Marches" />
          <img className={styles.projectPhoto} src={five} alt="The New Marches" />
          <img className={styles.projectPhoto} src={six} alt="The New Marches" />
          <img className={styles.projectPhoto} src={seven} alt="The New Marches" />
        </div>

        <p className={styles.projectDesc}>A popular lunchtime eatery, opened in 1972, and relaunched in 2021, Matt from The New Marches was looking to share some images of their stock on their social media platforms.
        
        <br/><br/>

        I was with the guys at their stall in the Butter Market for a little over half an hour, managing to get some shots of the products as they hit the counter.

        </p>

        <PortfolioLink />
      </Main>

      <Footer />
    </>
  );
};

export default Marches;