import styles from './Image.module.css';

const Image = props => {
  return (
    // className={`${styles[props.dimensions]}`}
    <div className={styles.homeImageContainer}>
      <img 
        key={props.key}
        src={props.src} 
        alt={props.alt}
        className={styles.img}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      />
    </div>
  )
}

export default Image;