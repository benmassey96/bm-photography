import styles from './NavButton.module.css';

const NavButton = props => {
  return (
    <button id="navButton" className={styles.navButton} onClick={props.onShowNav}>
      <span id="topBar" className={`${styles.navBar} ${styles.topBar} ${props.toggled && styles.topBarRotate}`}/>
      <span id="middleBar" className={`${styles.navBar} ${styles.middleBar}  ${props.toggled && styles.hidden}`}/>
      <span id="bottomBar" className={`${styles.navBar} ${styles.bottomBar}  ${props.toggled && styles.bottomBarRotate}`}/>
    </button>
  )
}

export default NavButton;