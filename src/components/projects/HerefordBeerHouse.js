import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import PortfolioLink from '../UI/PortfolioLink';
import styles from './ProjectStyles.module.css';
import one from '../../images/hereford_beer_house/hh7.jpg';
import two from '../../images/hereford_beer_house/hh.JPG';
import three from '../../images/hereford_beer_house/hh8.jpg';
import four from '../../images/hereford_beer_house/hh4.jpg';
import five from '../../images/hereford_beer_house/hh6.jpg';
import six from '../../images/hereford_beer_house/hh5.jpg';
import seven from '../../images/hereford_beer_house/hh3.jpg';
import eight from '../../images/hereford_beer_house/hh2.jpg';
import nine from '../../images/hereford_beer_house/hh9.jpg';
import ten from '../../images/hereford_beer_house/hh10.jpg';

const HerefordBeerHouse = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <Nav />
      <Main>
        <h1>Hereford Beer House</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={one} alt="Beer Here sign" />
          <img className={styles.projectPhoto} src={two} alt="Beer bottles" />
          <img className={styles.projectPhoto} src={three} alt="Beer glasses" />
          <img className={styles.projectPhoto} src={four} alt="Demonstration" />
          <img className={styles.projectPhoto} src={six} alt="Beer bottle being pulled from fridge" />
          <img className={styles.projectPhoto} src={seven} alt="Beer guidance" />
          <img className={styles.projectPhoto} src={eight} alt="Sion, Nathan and Daisy" />
          <img className={styles.projectPhoto} src={five} alt="Beer serving" />
          <img className={styles.projectPhoto} src={nine} alt="Tapping a keg" />
          <img className={styles.projectPhoto} src={ten} alt="Beer serving" />
        </div>

        <p className={styles.projectDesc}>Sion, the owner of Hereford Beer House approached me to take some photos for a recruitment drive he was pushing. I was looking to capture 'training in progress' and get some nice pictures for Sion to introduce the faces behind the pub.
        
        <br/><br/>

        In addition to recruitment, I also took some photos of the venue in general for use on their website.

        </p>

        <PortfolioLink />
      </Main>
    </>
  );
};

export default HerefordBeerHouse;