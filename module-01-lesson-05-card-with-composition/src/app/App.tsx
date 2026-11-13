import { useState } from 'react'
import CourseCard from './CourseCard/CourseCard'
import Panel from './Panel/Panel'
import courses from './courses.json'
import styles from './App.module.css'

export default function App() {
  const [category, setCategory] = useState('')
  const filteredCourses = courses.filter(course => !category || course.category === category)

  return (
    <main className={styles.page}>
      <h1>05. Карточка через композицию</h1>
      <Panel title="Фильтр курсов">
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
      </Panel>
      <p role="status">Найдено курсов: {filteredCourses.length}</p>
      <div className={styles.courses}>
        {filteredCourses.map(course => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </main>
  )
}
