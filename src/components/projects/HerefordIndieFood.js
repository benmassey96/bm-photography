import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import Footer from '../UI/Footer';
import styles from './ProjectStyles.module.css';
import bd from '../../images/indie_food/bd.JPG';
import cn from '../../images/indie_food/cn.JPG';
import rt from '../../images/indie_food/rt.JPG';
import tn from '../../images/indie_food/tn.JPG';
import wv from '../../images/indie_food/wv.JPG';
import fl from '../../images/indie_food/fl.JPG';
import py from '../../images/indie_food/py.JPG';
import hf from '../../images/indie_food/hf.JPG';
import ms from '../../images/indie_food/ms.JPG';
import mc from '../../images/indie_food/mc.JPG';
import PortfolioButton from '../UI/PortfolioLink';

const HerefordIndieFood = props => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <Nav />
      <Main>
        <h1>Hereford Indie Food</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={bd} alt="Jumping Jimmy band" />
          <img className={styles.projectPhoto} src={py} alt="Main stage" />
          <img className={styles.projectPhoto} src={fl} alt="Hereford Indie Food" />
          <img className={styles.projectPhoto} src={rt} alt="Return of the Spouse" />
          <img className={styles.projectPhoto} src={cn} alt="Neighbourhood Deli" />
          <img className={styles.projectPhoto} src={tn} alt="Trevor Nelson" />
          <img className={styles.projectPhoto} src={wv} alt="Wye Valley Brewery" />
          <img className={styles.projectPhoto} src={hf} alt="Hereford Indie Food" />
          <img className={styles.projectPhoto} src={ms} alt="Main stage" />
          <img className={styles.projectPhoto} src={mc} alt="Macman" />
        </div>

        <p className={styles.projectDesc}>I shot some pictures at Hereford Indie Food festival in 2022, for a number of different vendors, local businesses and performers. I attended and took pictures for fun but the images were well received and shared on social media by some of the vendors.</p>

        <PortfolioButton />
      </Main>

      <Footer/>
    </>
  );
};

export default HerefordIndieFood;