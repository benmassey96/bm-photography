import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Services from "./components/Services";
import Image from "./components/UI/Image";
import imageList from './utils/imageList';
import services from './utils/services';

function App() {
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
    <Image key={image.id} src={image.src} alt={image.src} dimensions={image.dimensions} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home imageList={homeImages} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services imageList={imageList} />} />
        <Route path="/contact" element={<Contact />} />
        {services.map((service) => {
          return <Route path={`/${service.id}`} element={<Service service={service} />}/>
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;