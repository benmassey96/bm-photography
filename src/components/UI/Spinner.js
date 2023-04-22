import { useEffect } from "react";
import styles from './Spinner.module.css';

const Spinner = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('spinner').style.display = "none";
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="spinner" className={styles.spinner}>
      <div id="square">.</div>
    </div>
  );
};

export default Spinner;