import { Fragment, useLayoutEffect } from 'react';
import Nav from '../UI/Nav';
import Main from '../UI/Main';
import PortfolioLink from '../UI/PortfolioLink';
import Footer from '../UI/Footer';
import styles from './ProjectStyles.module.css';
import one from '../../images/fun/pf.JPG';
import two from '../../images/fun/db2.JPG';
import three from '../../images/fun/bp.jpg';
import four from '../../images/fun/ln.JPG';
import five from '../../images/fun/fs2.jpg';
import six from '../../images/fun/bl.jpg';
import seven from '../../images/fun/tr.JPG';
import eight from '../../images/fun/mh.jpg';

const Fun = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Nav />
      <Main>
        <h1>For fun...</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={two} alt="Dubrovnik" />
          <img className={styles.projectPhoto} src={three} alt="Budapest" />
          <img className={styles.projectPhoto} src={four} alt="Lion at Chester Zoo" />
          <img className={styles.projectPhoto} src={five} alt="Fussen, Bavaria" />
          <img className={styles.projectPhoto} src={one} alt="Pen y Fan, Brecon Beacons" />
          <img className={styles.projectPhoto} src={seven} alt="Baby Malayan Tapir, Nessa, Chester Zoo" />
          <img className={styles.projectPhoto} src={six} alt="Berlin" />
          <img className={styles.projectPhoto} src={eight} alt="Munich" />
        </div>

        <p className={styles.projectDesc}>A collection of some of my favourite photos taken in my personal gallery.

        <br/><br/>

        I try to take my camera out with me as much as possible and enjoy taking pictures for fun, whether it's street photography or product photography. Taking a picture to me is more about simply pressing the shutter, it's composition, capturing a mood, the art of photography and appreciation for the subject(s) and equipment I use.
        </p>

        <PortfolioLink />
      </Main>

      <Footer />
    </>
  );
};

export default Fun;