import styles from './ControlledSearch.module.css'

const ControlledSearch = ({ search, onSearchChange }: { search: string; onSearchChange: (value: string) => void }) => {
  return (
    <div className={styles.search}>
      <label htmlFor="course-controlled-search">Управляемый поиск</label>
      <input type="search" id="course-controlled-search" placeholder="Поиск курсов..." value={search} onChange={event => onSearchChange(event.target.value)} />
    </div>
  );
}

export default ControlledSearch;
