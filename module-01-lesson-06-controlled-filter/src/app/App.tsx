import { useState } from 'react'
import CourseCard from './CourseCard/CourseCard'
import Panel from './Panel/Panel'
import ControlledSearch from './ControlledSearch'
import UncontrolledSearch from './UncontrolledSearch'
import courses from './courses.json'
import styles from './App.module.css'

export default function App() {
  const [category, setCategory] = useState('')
  const [controlledSearch, setControlledSearch] = useState('')
  const [uncontrolledSearch, setUncontrolledSearch] = useState('')

  const categoryCourses = courses.filter(course => !category || course.category === category)
  const controlledCourses = categoryCourses.filter(course =>
    course.title.toLowerCase().includes(controlledSearch.toLowerCase()))
  const uncontrolledCourses = categoryCourses.filter(course =>
    course.title.toLowerCase().includes(uncontrolledSearch.toLowerCase()))

  return (
    <main className={styles.page}>
      <h1>06. Управляемый и неуправляемый фильтр</h1>
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
      <Panel title="Управляемый фильтр">
        <ControlledSearch search={controlledSearch} setSearch={setControlledSearch} />
        <p role="status">Найдено курсов: {controlledCourses.length}</p>
        <div className={styles.courses}>
          {controlledCourses.map(course => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </Panel>
      <Panel title="Неуправляемый фильтр">
        <UncontrolledSearch defaultValue="" onSearch={setUncontrolledSearch} />
        <p role="status">Найдено курсов: {uncontrolledCourses.length}</p>
        <div className={styles.courses}>
          {uncontrolledCourses.map(course => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </Panel>
    </main>
  )
}
