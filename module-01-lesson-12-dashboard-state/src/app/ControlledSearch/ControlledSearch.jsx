import styles from './ControlledSearch.module.css'

export default function ControlledSearch({ search, onSearchChange }) {
  return (
    <div className={styles.search}>
      <label htmlFor="course-search">Поиск курсов</label>
      <input
        type="search"
        id="course-search"
        placeholder="Поиск курсов..."
        value={search}
        onChange={event => onSearchChange(event.target.value)}
      />
    </div>
  )
}
