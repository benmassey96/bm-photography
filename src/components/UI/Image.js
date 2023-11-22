import LikeButton from './LikeButton';
import styles from './Image.module.css';

const Image = props => {
  return (
    <div className={styles.imgContainer}>
      <img 
        key={props.key} 
        src={props.src} 
        alt={props.alt}
        className={styles.img}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      />
      <LikeButton />
    </div>
  )
}

export default Image;