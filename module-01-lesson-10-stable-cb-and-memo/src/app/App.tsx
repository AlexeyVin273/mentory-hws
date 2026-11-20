import styles from './App.module.css'
import CourseCatalog from './CourseCatalog/CourseCatalog'

export default function App() {
  return (
    <main className={styles.page}>
      <h1>10. Стабильный callback и memo</h1>
      <CourseCatalog />
    </main>
  )
}
