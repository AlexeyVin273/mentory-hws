import { useRef } from 'react';
import styles from './App.module.css'

const UncontrolledSearch = ({ defaultValue, onSearch }: { defaultValue: string; onSearch: (search: string) => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) {
      onSearch(ref.current.value);
    }
  }

  const handleReset = () => {
    if (ref.current) {
      ref.current.value = '';
      onSearch('');
    }
  }

  return (
    <div className={styles.filter}>
      <label htmlFor="course-uncontrolled-search">Неуправляемый поиск</label>
      <input ref={ref} type="search" id="course-uncontrolled-search" placeholder="Поиск курсов..." defaultValue={defaultValue} />
      <div className={styles.buttons}>
        <button type="button" onClick={handleSearch}>Найти</button>
        <button type="button" onClick={handleReset}>Сбросить</button>
      </div>
    </div>
  );
}

export default UncontrolledSearch;
