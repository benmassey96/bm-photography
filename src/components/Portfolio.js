import { Fragment, useLayoutEffect } from 'react';
import styles from './Portfolio.module.css';
import Nav from './UI/Nav.js';
import Main from './UI/Main';
import PortfolioCard from './UI/PortfolioCard.js';
import Footer from './UI/Footer.js';
import ft from '../images/indie_food/ft.JPG';
import bh from '../images/hereford_beer_house/bh.jpg';
import bh1 from '../images/beer_in_hand/bh1.JPG';
import pf from '../images/fun/db.JPG';
import da from '../images/deya/da4.JPG';
import rs from '../images/roti_shack/rs.JPG';
import mch from '../images/marches/mch1copy.jpg';
import back from '../images/portfolioBack.jpg';
import jack from '../images/jack/jackCardCover.jpg';

const Portfolio = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Nav />
      <img src={back} alt="Hereford Cathedral" className={styles.background} />
      <Main>
        <h2>Portfolio</h2>

        <div className={styles.portfolioContainer}>
          <PortfolioCard title="Hereford Indie Food" link="herefordindiefood" image={ft} />
          <PortfolioCard title="Hereford Beer House" link="herefordbeerhouse" image={bh} />
          <PortfolioCard title="Beer in Hand" link="beerinhand" image={bh1} />
          <PortfolioCard title="The New Marches" link="marches" image={mch} />
          <PortfolioCard title="DEYA Brewing Company" link="deya" image={da} />
          <PortfolioCard title="Roti Shack" link="rotishack" image={rs} />
          <PortfolioCard title="Just for fun, some of my favourite personal images" link="fun" image={pf} />
          <PortfolioCard title="Jack" link="jack" image={jack} />
        </div>
      </Main>

      <Footer />
    </>
  );
};

export default Portfolio;