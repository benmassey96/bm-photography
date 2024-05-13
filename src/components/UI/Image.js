import styles from './Image.module.css';
import { Fragment } from 'react';

const Image = props => {
  return (
    <>
    <div 
      className={styles.responsive}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className={styles.gallery}>
        <a target="_blank" href={props.src}>
          <img src={props.src} alt={props.alt}/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Image;