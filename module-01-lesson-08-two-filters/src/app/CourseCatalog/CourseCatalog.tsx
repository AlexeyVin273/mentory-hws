import { useState } from 'react'
import Panel from '../Panel/Panel'
import ControlledSearch from '../ControlledSearch/ControlledSearch'
import CourseListView from '../CourseListView/CourseListView'
import styles from './CourseCatalog.module.css'
import courses from '../courses.json'

const CourseCatalog = () => {
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)

  const categoryCourses = courses.filter(course => !category || course.category === category)
  const filteredCourses = categoryCourses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()))

  const courseSelectHandler = (id: string) => {
    setSelectedCourseId(id)
  }

  const resetFiltersHandler =() => {
    setCategory('')
    setSearch('')
  }

  return (
    <div className={styles.catalog}>
      {
        selectedCourseId && (
          <Panel title="Выбранный курс">
            <p className={styles.selectedCourse}>
              Выбран курс: {courses.find(course => course.id === selectedCourseId)?.title}
            </p>
          </Panel>
        )
      }

      <Panel title="Фильтры и поиск">
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
          <ControlledSearch search={search} onSearchChange={setSearch} />
          <button className={styles.resetButton} type="button" onClick={resetFiltersHandler}>
            Сбросить фильтры
          </button>
        </div>
      </Panel>

      <Panel title={`Найдено курсов: ${filteredCourses.length}`}>
        <CourseListView
          items={filteredCourses}
          emptyText="Курсы не найдены"
          onSelect={courseSelectHandler}
        />
      </Panel>
    </div>
  )
}

export default CourseCatalog
