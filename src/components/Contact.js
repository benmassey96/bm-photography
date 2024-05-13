import { Fragment, useLayoutEffect } from 'react';
import styles from './Contact.module.css';
import Header from './UI/Header';
import Main from './UI/Main';
import SectionHeader from './UI/SectionHeader';
import Footer from './UI/Footer';

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Header />

      <Main>
        <SectionHeader>Contact</SectionHeader>

        <div className={styles.contact}>
          <div className={styles.content}>
            <p>Had a browse and think you'd like to get in touch?</p>

            <p>Feel free to reach out, chances are I'm eagerly awaiting your message. Enquiries are on a totally no-obligation basis</p>

            <a className={styles.contactLink} href="mailto:hello@benmasseyphotos.co.uk">hello@benmassey.co.uk</a>
            <a className={styles.contactLink} href="https://www.instagram.com/benmasseyphotos/">Say Hi on Insta</a>
          </div>
          
          <div className={styles.mapContainer}>
            <p>I'm based in Hereford, but am open to travel. In case you're unsure of where Hereford is...</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39255.67250478159!2d-2.7648342072290517!3d52.05279159826687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486fd425aa6e5341%3A0xd59c9a4bfd3c6c96!2sHereford!5e0!3m2!1sen!2suk!4v1700863278606!5m2!1sen!2suk" 
              className={styles.map}
              width="100%"
              height="300"
              allowFullScreen="" 
              title='map'
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000">
            </iframe>
          </div>
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Contact;