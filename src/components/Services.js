import { Fragment, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import Header from './UI/Header';
import Main from './UI/Main';
import services from '../utils/services';
import Footer from './UI/Footer';

const Services = props => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  let serviceImages = [];

  services.forEach((service) => {
    serviceImages.unshift(service.name)
  });

  return (
    <>
      <Header />
      <Main>
        <ul className={styles.serviceList}>
          {
            services.map((service) => {
              return <li className={styles.service}>
                <img src={service.image} alt={service.name} />  
                <div className={service.blurred}></div>
                <Link className={styles.serviceLink} to={service.id}>{service.name}</Link>
              </li>
            })
          }
        </ul>

        <div className={`${styles.serviceContainer} ${styles.otherServices}`}>
          <h3>Not seen yourself?</h3>

          <p>If your project isn't specifically listed above, fear not! It isn't an exhaustive list.
            <br/><br/>
            I'm here for the love of photography and I'm always on the lookout for new exciting projects. Feel free to still <Link to="/contact">get in touch</Link> to discuss what you're looking for with me.
          </p>
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Services;