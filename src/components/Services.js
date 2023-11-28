import { Fragment, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import Header from './UI/Header';
import Main from './UI/Main';
import Image from './UI/Image';
import imageList from '../images/imageList';
import services from '../services.json';
import Footer from './UI/Footer';

const Services = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Header />
      <Main>
        <h2>Services</h2>

        {
          services.map((service) => {
            return <div className={styles.serviceContainer} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              
              <ul className={styles.serviceIncludes}>
                {service.includes.map((include) => {
                  return <li className={styles.serviceIncludesItem}>{include}</li>  
                })}
              </ul>
              
              {service.notes && <p className={styles.notes}>{service.notes}</p> }
              <Image src={imageList[Math.floor(Math.random() * (service.images[1] - service.images[0] + 1) + service.images[0])]} alt="Service" />
            </div>
          })
        }

        <div className={styles.serviceContainer}  data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <h3>Not seen yourself?</h3>

          <p>If your project isn't specifically listed above, fear not! It isn't an exhaustive list. Feel free to still <Link to="/contact">get in touch</Link> to discuss what you're looking for with me.</p>
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Services;