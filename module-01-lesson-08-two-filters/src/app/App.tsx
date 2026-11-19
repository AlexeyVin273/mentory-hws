import styles from './App.module.css'
import CourseCatalog from './CourseCatalog/CourseCatalog'

export default function App() {
  return (
    <main className={styles.page}>
      <h1>07. Контейнер каталога и представление</h1>
      <CourseCatalog />
    </main>
  )
}
