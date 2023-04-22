import styles from './Input.module.css';

const Input = props => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={props.name}>{props.placeholder}</label>
      <input required type={props.type} className={styles.input} id={props.name} name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;