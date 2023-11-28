import { Fragment, useLayoutEffect } from "react";
import Image from "./UI/Image";
import Header from "./UI/Header";
import Main from "./UI/Main";
import imageList from "../images/imageList";
import Footer from "./UI/Footer";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const shuffleImages = imageList => {
    let currentIndex = imageList.length, randomIndex;

    // While there are remaining elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [imageList[currentIndex], imageList[randomIndex]] = [imageList[randomIndex], imageList[currentIndex]];
    }
    
    return imageList;
  }

  const shuffledImages = shuffleImages(imageList);

  return (
    <>
      <Header />
      
      <Main>
        <div>
          {
            imageList.map((image, index) => (
            <Image key={index} src={shuffledImages[index]} alt={image} />
          ))
          }
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Home;