import { useState, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Image from "./components/UI/Image";
import imageList from './utils/imageList';

function App() {
  const [modal, setModal] = useState({ "show" : false, "image_src" : undefined, "image_alt" : undefined })
  
  const onImageClickHandler = image => {
    setModal({
      "show" : true,
      "image_src" : image.target.src,
      "image_alt" : image.target.alt
    })
  }

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
  };

  const shuffledImages = shuffleImages(imageList);

  const homeImages = shuffledImages.map((image) => (
    <Image onImageClick={onImageClickHandler} key={image.id} src={image.src} category={image.category} alt={image.src} dimensions={image.dimensions} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home imageList={homeImages} modal={modal} closeModal={setModal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services imageList={imageList} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;