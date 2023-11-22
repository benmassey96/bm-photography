import styles from './NavButton.module.css';

const NavButton = props => {
  return (
    <button className={styles.navButton} onClick={props.onShowNav}>
      <span className={`${styles.navBar} ${styles.topBar}`}/>
      <span className={`${styles.navBar} ${styles.middleBar}`}/>
      <span className={`${styles.navBar} ${styles.bottomBar}`}/>
    </button>
  )
}

export default NavButton;