import { Fragment, useLayoutEffect } from "react";
import Nav from './UI/Nav';
import ContactForm from "./UI/ContactForm";
import Main from './UI/Main';
import Footer from "./UI/Footer";
import styles from './Contact.module.css';
import back from '../images/contactBack.JPG';

const Contact = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Nav />
      <img src={back} alt="Tiled background" className={styles.background} />
      <Main>
        <div className={styles.contactPageContainer}>
          <h2>Contact</h2>
          <div class={styles.contact}>
            <div class={styles.contactText}>
              <p>Don't hesitate to get in touch if you have something in mind you'd like to discuss.</p>
              
              <p>Depending on what you're looking for, I may need to gather some additional information from you to ensure you have the best experience.</p>

              <p>There's absolutely no obligation for any consultation and I'd love to hear from you.</p>
            </div>
            <ContactForm />
          </div>        
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Contact;