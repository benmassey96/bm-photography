import styles from './ImageModal.module.css';

const ImageModal = props => {
    return (
        <div className={styles.imageModal}>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default ImageModal;