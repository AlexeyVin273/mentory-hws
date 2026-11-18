import { useState } from 'react'
import Panel from './Panel/Panel'
import styles from './App.module.css'

export default function App() {
  const [category, setCategory] = useState('')

  return (
    <main className={styles.page}>
      <h1>07. Контейнер каталога и представление</h1>
      <Panel title="Общая категория для обоих примеров">
        <div className={styles.filtersContainer}>
          <div className={styles.filter}>
            <label htmlFor="course-category">Категория</label>
            <select
              id="course-category"
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              <option value="">Все категории</option>
              <option value="frontend">Frontend</option>
              <option value="fullstack">Fullstack</option>
              <option value="quality">Quality</option>
            </select>
          </div>
        </div>
      </Panel>
    </main>
  )
}
