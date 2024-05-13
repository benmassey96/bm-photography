import styles from './GalleryFilter.module.css'

const GalleryFilter = props => {
    return (
        <select className={styles.galleryFilter} onChange={(event) => {props.onFilterSelect(event.target.value)}}>
            <option className={`${styles.galleryFilterOption} ${styles.galleryFilterDefault}`} selected>All</option>
            {props.services.map((service) => {
                return <option className={styles.galleryFilterOption}>{service.name}</option>
            })}
        </select>
    )
}

export default GalleryFilter;