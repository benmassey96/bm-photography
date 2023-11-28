import { Fragment, useLayoutEffect } from "react";
import Header from "./UI/Header";
import Main from "./UI/Main";
import styles from './About.module.css';
import Footer from "./UI/Footer";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <Header />

      <Main className={styles.about} >
        <h2>About</h2>

        <p>
          Welcome to my creative corner! I'm Ben, an avid amateur photographer driven by a profound love for capturing the genuine stories that unfold around us. While my journey began with a fascination for the unpredictable beauty of documentary-style photography, my passion has evolved to include a keen interest in the artistry of product photography.
        </p>

        <p>
          There's something magical about freezing candid moments in time, whether it's the laughter shared between friends, the quiet contemplation of a stranger, or the bustling energy of a city street. These moments, rich with authenticity, inspire my documentary approach to photography. It's an endeavor to narrate compelling stories through visual storytelling, a journey that continues to shape my perspective and refine my craft.
        </p>

        <p>
          Lately, I've found myself drawn to the world of product photography—a realm where creativity meets commerce. Exploring the intricate details of everyday objects, finding the perfect play of light and shadow, and showcasing products in their most captivating light has become an exciting extension of my photographic endeavors.
        </p>
      </Main>

      <Footer />
    </>
  )
}

export default About;