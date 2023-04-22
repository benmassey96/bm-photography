import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import PortfolioLink from '../UI/PortfolioLink';
import Footer from '../UI/Footer';
import styles from './ProjectStyles.module.css';
import one from '../../images/beer_in_hand/bh11.jpg';
import two from '../../images/beer_in_hand/bh3.jpg';
import three from '../../images/beer_in_hand/bh4.jpg';
import four from '../../images/beer_in_hand/bh8.jpg';
import five from '../../images/beer_in_hand/bh6.jpg';
import six from '../../images/beer_in_hand/bh9.jpg';
import seven from '../../images/beer_in_hand/bh10.jpg';
import eight from '../../images/beer_in_hand/bh12.jpg';
import nine from '../../images/beer_in_hand/bh13.jpg';
import ten from '../../images/beer_in_hand/pa.JPG';
import eleven from '../../images/beer_in_hand/pa1.JPG';
import twelve from '../../images/beer_in_hand/fm.jpg';

const BeerInHand = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Nav />
      <Main>
        <h1>Beer in Hand</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={one} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={two} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={three} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={four} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={five} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={eight} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={seven} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={six} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={ten} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={eleven} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={nine} alt="Beer in Hand" />
          <img className={styles.projectPhoto} src={twelve} alt="Beer in Hand" />
        </div>

        <p className={styles.projectDesc}>Come the end of the first lockdown in 2020, when pubs could reopen, I approached Gareth at Beer in Hand to take some photos of the pub with the new layout for them to re-launch and share the images on their social media.
        
        <br/><br/>

        As time has passed, I've continued taking pictures for the pub; including shots for their pizza nights some Thursdays and their monthly folk music night.

        </p>

        <PortfolioLink />
      </Main>

      <Footer />
    </>
  );
};

export default BeerInHand;