import styles from './Image.module.css';

const Image = props => {
  return (
    <div 
      className={styles.responsive}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      onClick={props.onImageSelect}
    >
      <div className={styles.gallery}>
        <img src={props.src} alt={props.alt}/>
      </div>
    </div>
  )
}

export default Image;