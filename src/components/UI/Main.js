import styles from './Main.module.css';

const Main = props => {
  return (
    <main
      className={styles.main}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      { props.children }
    </main>
  )
}

export default Main;