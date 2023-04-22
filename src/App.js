import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Home from './components/Home';
import Contact from "./components/Contact";
import HerefordIndieFood from "./components/projects/HerefordIndieFood";
import HerefordBeerHouse from "./components/projects/HerefordBeerHouse";
import BeerInHand from "./components/projects/BeerInHand";
import Marches from "./components/projects/Marches";
import Deya from "./components/projects/Deya";
import Roti from "./components/projects/Roti";
import Jack from "./components/projects/Jack";
import Fun from "./components/projects/Fun";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/herefordindiefood" element={<HerefordIndieFood />} />
        <Route path="/herefordbeerhouse" element={<HerefordBeerHouse />} />
        <Route path="/beerinhand" element={<BeerInHand />} />
        <Route path="/marches" element={<Marches />} />
        <Route path="/deya" element={<Deya />} />
        <Route path="/rotishack" element={<Roti />} />
        <Route path="/jack" element={<Jack />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;