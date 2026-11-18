import styles from './App.module.css'

const ControlledSearch = ({ search, setSearch }: { search: string; setSearch: (value: string) => void }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="course-controlled-search">Управляемый поиск</label>
      <input type="search" id="course-controlled-search" placeholder="Поиск курсов..." value={search} onChange={event => setSearch(event.target.value)} />
      <div className={styles.buttons}>
        <button type="button" onClick={() => setSearch('')}>Сбросить</button>
      </div>
    </div>
  );
}

export default ControlledSearch;
