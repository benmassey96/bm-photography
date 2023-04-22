import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import PortfolioLink from '../UI/PortfolioLink';
import Footer from '../UI/Footer';
import styles from './ProjectStyles.module.css';
import one from '../../images/roti_shack/rs2.JPG';
import two from '../../images/roti_shack/rs3.JPG';
import three from '../../images/roti_shack/rs.JPG';
import four from '../../images/roti_shack/rs5.JPG';
import five from '../../images/roti_shack/rs4.JPG';
import six from '../../images/roti_shack/rs7.JPG';

const Roti = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <Nav />
      <Main>
        <h1>Roti Shack</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={one} alt="Roti Shack" />
          <img className={styles.projectPhoto} src={two} alt="Roti Shack" />
          <img className={styles.projectPhoto} src={three} alt="Roti Shack" />
          <img className={styles.projectPhoto} src={four} alt="Roti Shack" />
          <img className={styles.projectPhoto} src={five} alt="Roti Shack" />
          <img className={styles.projectPhoto} src={six} alt="Roti Shack" />
        </div>

        <p className={styles.projectDesc}>The Roti Shack serves up Malaysian style Roti Canai and Murtabak. I went to Caerphilly's Big Cheese festival in 2022, which that year was the Big Little Cheese festival, being their first year since COVID restrictions were lifted.
        
        <br/><br/>

        The street-style food was delicious and I took some pictures and shared them on social media. The guys at Roti Shack loved them and used them themselves.

        </p>

        <PortfolioLink />
      </Main>

      <Footer />
    </>
  );
};

export default Roti;