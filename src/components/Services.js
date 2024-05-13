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

  const businessClients = [
    "Beer in Hand",
    "The Roti Shack",
    "Pembrokeshire Gin Co.",
    "Return of The Spouse",
    "Healeys Cornish Cyder",
    "Hereford Beer House",
    "Barking Mad Bakery"
  ]

  return (
    <>
      <Header />
      <Main>
      <h2 className={styles.servicePageHeader}>What I offer</h2>

        <h3 className={styles.approachHeader}>My approach</h3>
        <p>Nobody wants to feel stressed, self-conscious or embarrassed when in front of a lens. If your project involves you, or anyone else for that matter, being the subject then my aim is to make the experience of having what could even be your first photoshoot enjoyable.</p>

        <p>Most of the time, you won't even know I'm there, my aim is to make myself as invisible as possible to capture raw, real, authentic moments from my subject.</p>

        <ul className={styles.serviceList}>
          {
            services.map((service) => {
              return <li className={styles.service}>
                <img src={service.image} className={styles.serviceImage} alt={service.name} />  
                <div className={styles.blurred}></div>
                <h3 className={styles.serviceTitle} to={service.id}>{service.name}</h3>
              </li>
            })
          }
        </ul>

        <div className={`${styles.serviceContainer} ${styles.otherServices}`}>
          <h3 className={styles.otherServiceHeader}>Not seen yourself?</h3>

          <p>If your project isn't specifically listed above, fear not! It isn't an exhaustive list.
            <br/><br/>
            I'm here for the love of photography and I'm always on the lookout for new exciting projects. Feel free to still <Link to="/contact">get in touch</Link> to discuss what you're looking for with me.
          </p>
        </div>

        <div className={styles.references}>
          <h3 className={styles.referencesHeader}>Some of the businesses that have used my images include...</h3>
          <ul className={styles.referencesContainer}>
            {businessClients.map((client) => {
              return <li className={styles.reference}>{client}</li>
            })}
          </ul>
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Services;