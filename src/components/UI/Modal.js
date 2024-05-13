import styles from './Modal.module.css';

const Modal = props => {
    return (
        <div className={styles.modal}>
            <button className={styles.close} onClick={props.closeModal}>&times;</button>
            <img className={styles.modalImage} src={props.src} alt={props.alt} />
        </div>
    );
};

export default Modal;