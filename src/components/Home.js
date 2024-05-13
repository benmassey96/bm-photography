import { Fragment, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import styles from "./Home.module.css";
import services from "../utils/services";
import penyfan_desktop from "../images/penyfan_desktop.jpg";
import GalleryFilter from "./UI/GalleryFilter";

const Home = props => {
  const [imageList, setImageList] = useState(props.imageList);
  const [galleryFilter, setGalleryFilter] = useState();

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const filterGallery = category => {
    setGalleryFilter(category)

    console.log(`${galleryFilter} images showing`)
    
    if(category === "All") {
      console.log("All")
      return props.imageList
    } 
    else {
      setImageList(props.imageList.filter((image) => {
        return image.props.category === category
      }))
    }
  };

  useEffect(() => {
    console.log(galleryFilter)
  }, [galleryFilter])

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

          <GalleryFilter onFilterSelect={filterGallery} services={services} />
          
          <div>
            {imageList}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;