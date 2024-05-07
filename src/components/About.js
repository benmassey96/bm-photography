import { Fragment, useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Header from "./UI/Header";
import Main from "./UI/Main";
import Footer from "./UI/Footer";
import SectionHeader from "./UI/SectionHeader";
import ben from "../images/ben.jpg";
import ben_and_obi from "../images/ben_obi.jpg";
import ben_candid from "../images/ben_two.jpg";
import cologne from "../images/cologne.jpg";
import penyfan_desktop from "../images/penyfan_desktop.jpg";
import obi from "../images/obi_fence.JPG";
import dubrovnik from "../images/dubrovnik.jpg"
import styles from './About.module.css';

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const moreAboutItems = [
    "I'm a huge Star Wars fan. The prequels are my favourite. Don't judge.",
    "I love German culture, and have been trying to learn the language for some time. Currently on a 1,500+ day streak on Duolingo!",
    "You'll often find me gazing up into the sky on a clear night. Astronomy fascinates me and I have recently tried my hand at astrophotography."
  ]
  
  return (
    <>
      <Header />

      <Main className={styles.about} >
        <SectionHeader>About Ben</SectionHeader>

        <div className={styles.aboutInfo} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <p className={styles.aboutParagraph}>
            I'm Ben, a budding amateur photographer able to suit any project you have in mind.
            <br/><br/>
            I've dabbled in a wide range of genres and styles of photography, from candid styles like street, to events, products, pets, family portraits. Recently I shot my first wedding as a solo shooter. I guess you could say I'm a jack of all styles!
            <br/><br/>
            Bottom line is, there isn't a style/genre that I've explored and not enjoyed, so whatever you have in mind, I'm here for it.
          </p>

          <img className={styles.aboutInfoImage} alt="Ben" src={ben} />
        </div>


        <div className={styles.aboutInfo} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <img className={styles.aboutInfoImage} alt="Ben" src={ben_candid} />

          <p className={styles.aboutParagraph}>
          My camera goes with me most places and I'm always snapping away, affectionately acquiring the nickname "David Bailey" from my family. I often shoot and share my images on social media, and so far they have been used and shared by businesses and individuals locally and further afield, from Cornwall to Croatia!
          <br/><br/>
          Capturing candid moments is my absolute favourite; freezing the moments like the uncontrollable laughter between friends, the busy atmosphere of a popular bar or pub, a couple sharing a special moment, or a four-legged friend enjoying a splash in a muddy puddle, is a truly special ability that I love to share.
          </p>
        </div>

        <div className={styles.aboutBonusPics} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <img src={cologne} alt="Dom in Cologne" className={styles.aboutImage} />
          <img src={obi} alt="Ben's dog, Obi" className={styles.aboutImage} />
          <img src={penyfan_desktop} alt="Misty peaks looking from Pen y Fan" className={styles.aboutImage} />
          <img src={dubrovnik} alt="Kayaking in Dubrovnik" className={styles.aboutImage} />
        </div>

        <div className={styles.aboutInfo} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <img className={styles.aboutInfoImage} alt="Ben" src={ben_and_obi} />

          <p className={styles.aboutParagraph}>
            Exploration is more than half of the fun, for me. I find it fascinating to think about how powerful cameras can be, whether it's something earthly such as a brand's latest product, or our neighbouring galaxy.
          </p>
        </div>

        <div className={styles.moreAbout} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <h4 className={styles.moreAboutHeader}>The Ben behind the camera</h4>
          <ul className={styles.moreAboutList}>
            {moreAboutItems.map((item) => {
              return <li className={styles.moreAboutItem}>{item}</li>
            })}

            <li className={styles.moreAboutItem}>I brew my own beer, from time to time. I also have a craft beer blog on Instagram <a href="https://www.instagram.com/beer_in_mass/" target="_blank">@beer_in_mass</a></li>
          </ul>
        </div>
      </Main>


      <Footer />
    </>
  )
}

export default About;