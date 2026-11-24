import { useState } from 'react'
import Panel from '../Panel/Panel'
import ControlledSearch from '../ControlledSearch/ControlledSearch'
import CourseCard from '../CourseCard/CourseCard'
import CourseListView from '../CourseListView/CourseListView'
import { useFavorites } from '../hooks/useFavorites'
import courses from '../courses.json'
import styles from './CourseCatalog.module.css'

export default function CourseCatalog() {
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [selectedCourseId, setSelectedCourseId] = useState(null)
  const { ids: favoriteIds, toggle, clear } = useFavorites()

  const filteredCourses = courses.filter(course =>
    (!category || course.category === category)
    && course.title.toLowerCase().includes(search.trim().toLowerCase()))
  const selectedCourse = courses.find(course => course.id === selectedCourseId) ?? null
  const favoriteCourses = courses.filter(course => favoriteIds.includes(course.id))

  return (
    <div className={styles.catalog}>
      <Panel title="Выбранный курс">
        {selectedCourse ? (
          <CourseCard
            course={selectedCourse}
            isFavorite={favoriteIds.includes(selectedCourse.id)}
            onToggleFavorite={toggle}
          />
        ) : <p>Выберите курс из списка ниже</p>}
      </Panel>

      <Panel title="Фильтры и поиск">
        <div className={styles.filtersContainer}>
          <div className={styles.filter}>
            <label htmlFor="course-category">Категория</label>
            <select id="course-category" value={category} onChange={event => setCategory(event.target.value)}>
              <option value="">Все категории</option>
              <option value="frontend">Frontend</option>
              <option value="fullstack">Fullstack</option>
              <option value="quality">Quality</option>
            </select>
          </div>
          <ControlledSearch search={search} onSearchChange={setSearch} />
          <button className={styles.resetButton} type="button" onClick={() => setSearch('')}>
            Очистить поиск
          </button>
        </div>
      </Panel>

      <Panel title={`Избранное: ${favoriteCourses.length}`} actions={
        <button type="button" onClick={clear}>Очистить избранное</button>
      }>
        {favoriteCourses.length > 0
          ? <p>{favoriteCourses.map(course => course.title).join(', ')}</p>
          : <p>Избранных курсов пока нет</p>}
      </Panel>

      <Panel title={`Найдено курсов: ${filteredCourses.length}`}>
        <CourseListView
          items={filteredCourses}
          emptyText="Курсы не найдены"
          onSelect={setSelectedCourseId}
          onToggleFavorite={toggle}
          favoriteIds={favoriteIds}
          selectedCourseId={selectedCourseId}
        />
      </Panel>
    </div>
  )
}
