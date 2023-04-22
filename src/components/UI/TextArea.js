import styles from './Input.module.css';

const TextArea = props => {
  return (
    <div className={styles.textArea}>
      <label className={styles.label} htmlFor={props.name}>Your Message</label>
      <textarea required placeholder="Your enquiry" id={props.name}></textarea>
    </div>
  );
};

export default TextArea;