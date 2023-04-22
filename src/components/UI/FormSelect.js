import { Fragment } from "react";
import styles from './FormSelect.module.css';

const FormSelect = props => {
  return (
    <>
      <div className={styles.selectService}>
        <label for="service" className={styles.selectLabel}>Type of Service</label>
        <select id="serviceSelect" className={styles.formSelect} name="service" onChange={props.selectChange}>
          <option selected>Please select</option>
          <option>Family</option>
          <option>Pet</option>
          <option>Product</option>
          <option>Portraits</option>
          <option>Wedding</option>
          <option value="Other">Other (please specify)</option>
        </select>
      </div>
    </>
  );
};

export default FormSelect;