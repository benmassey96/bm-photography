import { Fragment, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./UI/Nav";
import Main from "./UI/Main";
import b3 from '../images/b3.jpg';
import b5 from '../images/b5.JPG';
import './About.css';
import Spinner from "./UI/Spinner";
import Footer from "./UI/Footer";

const About = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Spinner />
      <Nav />
      <img className="benBackground" alt="Ben" src={b5}/>
      <Main>
        <h2>About</h2>
        <p>Hi, I'm Ben and I'm from Hereford.</p>

        <h3>What I shoot</h3>
        <p>I'm passionate about capturing beautiful images, regardless of what the subject or project is. To give you an idea of what I've shot before, or would like to shoot in the future...</p>

        <ul className="servicesList">
          <li>Product</li>
          <li>Pet</li>
          <li>Automotive</li>
          <li>Venues</li>
          <li>Portraits</li>
          <li>Events</li>
          <li>Family</li>
          <li>Weddings</li>
        </ul>

        <h3>Photography and me</h3>
        <p>Photography started for me going back when I was 19, mainly on my phone until I got my first "proper" camera, a Sony DSC H400. From then it was mostly travel photography. Now, my portfolio has grown and my equipment upgraded along with it.</p>

        <p>I started a <a href="https://www.instagram.com/beer_in_mass/" target="_blank" rel="noreferrer">craft beer blog</a> on Instagram, taking pictures of the cool artwork you see oh-so-often with craft beer, tagging the breweries. I managed to gain a small following and recognition from breweries, local and afar; Odyssey Brewery Co., Wild Beer Company and Lucky 7 brewery, to name a few.</p>

        <p>I've since taken pictures for a number of venues and events, local and afar. I've also shot for friends and family on various different things, from pet to parties etc. Check out my <Link to="/portfolio">portfolio</Link>.</p>

        <p>I'm quite active on <a href='https://www.instagram.com/benmasseyphotos/' target="_blank" rel='noreferrer'>Instagram</a>, so be sure to follow me to see more what I do.</p>

        <div className="aboutPictures">
          <img id="ben" src={b3} alt="Ben" />
        </div>
      </Main>

      <Footer />
    </>
  );
};

export default About;