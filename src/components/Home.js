import { Fragment, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import styles from "./Home.module.css";
import services from "../utils/services";
import penyfan_desktop from "../images/penyfan_desktop.jpg";
import GalleryFilter from "./UI/GalleryFilter";
import Modal from "./UI/Modal";

const Home = props => {
  const [imageList, setImageList] = useState(props.imageList);
  const [galleryFilter, setGalleryFilter] = useState("All");

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // });

  const filterGallery = category => {
    if(category === "All") {
      return setImageList(props.imageList)
    } 
    else {
      setImageList(props.imageList.filter((image) => {
        return image.props.category === category
      }))
    }
  };

  useEffect(() => {
    filterGallery(galleryFilter)
  }, [galleryFilter])

  return (
    <>
      {props.modal.show && <Modal src={props.modal.image_src} alt={props.modal.image_alt} closeModal={props.closeModal} />}
      <Header />

      <div className={styles.home}>
        <div className={styles.hero}>
          <img className={styles.heroImage} src={penyfan_desktop} alt="Pen y Fan" />

          <div className={styles.heroImageBack}></div>
          <h1 className={styles.heroHeader}>Hi, I'm <span className={styles.headerSpan}>Ben</span>.<br/>All purpose <span className={styles.headerSpan}>photographer</span> located in <span className={styles.headerSpan}>Herefordshire</span></h1>
        </div>

        <div className={styles.gallery}>
          <h2 className={styles.galleryHeader}>Gallery</h2>

          <GalleryFilter onFilterSelect={setGalleryFilter} services={services} />
          
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