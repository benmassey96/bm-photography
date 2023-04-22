import { Fragment, useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./UI/Footer";
import HomeGrid from "./HomeGrid";
import Nav from "./UI/Nav";
import Spinner from "./UI/Spinner";

const Home = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Spinner />
      <Nav />
      <Header />
      <HomeGrid />
      <Footer />
    </>
  );
};

export default Home;