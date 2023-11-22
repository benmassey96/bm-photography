import { Fragment } from "react";
import Image from "./UI/Image";
import imageList from "../images/imageList";
import Nav from "./UI/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      
      <main>
        <div>
          {imageList.map((image, index) => (
            <Image key={index} src={image} alt={image} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home;