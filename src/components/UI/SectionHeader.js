import styles from './SectionHeader.module.css';

const SectionHeader = props => {
    return (
        <h2 className={styles.sectionHeader}>
          { props.children }
        </h2>
    );
};

export default SectionHeader;