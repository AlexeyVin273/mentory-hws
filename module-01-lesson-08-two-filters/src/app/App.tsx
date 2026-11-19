import styles from './App.module.css'
import CourseCatalog from './CourseCatalog/CourseCatalog'

export default function App() {
  return (
    <main className={styles.page}>
      <h1>08. Подъём состояния двух фильтров</h1>
      <CourseCatalog />
    </main>
  )
}
