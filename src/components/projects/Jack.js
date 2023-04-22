import { Fragment, useLayoutEffect } from "react";
import styles from './ProjectStyles.module.css';
import PortfolioLink from '../UI/PortfolioLink';
import Main from "../UI/Main";
import Nav from "../UI/Nav";
import Footer from "../UI/Footer";
import one from '../../images/jack/jack_bridge.jpg';
import two from '../../images/jack/jack_woods1.jpg';
import three from '../../images/jack/jack3.jpg';
import four from '../../images/jack/jack4.jpg';
import five from '../../images/jack/jack5.jpg';
import six from '../../images/jack/jack6.jpg';
import seven from '../../images/jack/jack7.jpg';

const Jack = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Nav />
      <Main>
        <h1>Jack</h1>

        <div className={styles.projectPhotos}>
          <img className={styles.projectPhoto} src={one} alt="Jack, the Malamute" />
          <img className={styles.projectPhoto} src={two} alt="Jack, the Malamute" />
          <img className={styles.projectPhoto} src={three} alt="Jack, the Malamute" />
          <img className={styles.projectPhoto} src={four} alt="Jack, the Malamute" />
          <img className={styles.projectPhoto} src={five} alt="Jack, the Malamute" />
          <img className={styles.projectPhoto} src={six} alt="Jack, the Malamute" />
          <img className={styles.projectPhoto} src={seven} alt="Jack, the Malamute" />
        </div>

        <p className={styles.projectDesc}>
          Jack, what a good boy. I had the pleasure of meeting Jack after a colleague kindly agreed to let me take some pictures of him.

          <br/><br/>

          Going out and getting some shots of Jack out on his walk was great, it allowed me to capture him having a whale of a time.
        </p>

        <PortfolioLink />
      </Main>

      <Footer />
    </>
  )
};

export default Jack;