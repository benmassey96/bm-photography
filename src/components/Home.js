import { Fragment, useLayoutEffect } from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import styles from "./Home.module.css";
import penyfan_desktop from "../images/penyfan_desktop.jpg";

const Home = props => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const columnLength = Math.ceil(props.imageList.length / 4);

  const columns = Array.from( {length: columnLength }, (v, i) => 
    props.imageList.slice(i * columnLength, i * columnLength + columnLength)
  );

  return (
    <>
      <Header />


      <div className={styles.home}>
        <div className={styles.hero}>
          <img className={styles.heroImage} src={penyfan_desktop} alt="Pen y Fan" />

          <div className={styles.heroImageBack}></div>
          <h1 className={styles.heroHeader}>Hi, I'm <span className={styles.headerSpan}>Ben</span>.<br/>All purpose <span className={styles.headerSpan}>photographer</span> located in <span className={styles.headerSpan}>Herefordshire</span></h1>
        </div>

        <div className={styles.gallery}>
          <h2 className={styles.galleryHeader}>Gallery</h2>
        </div>

        <div className={styles.homeImages}>
          <div className={styles.column}>
          { columns[0] }
          </div>

          <div className={styles.column}>
          { columns[1] }
          </div>

          <div className={styles.column}>
            { columns[2] }
          </div>

          <div className={styles.column}>
            { columns[3] }
          </div>
        </div>


        <div className={styles.mobileHomeImages}>
          { props.imageList }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;