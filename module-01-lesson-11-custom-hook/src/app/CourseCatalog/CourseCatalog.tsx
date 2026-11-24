import Panel from '../Panel/Panel'
import CourseListView from '../CourseListView/CourseListView'
import { useFavorites } from '../hooks/useFavorites'
import styles from './CourseCatalog.module.css'
import courses from '../courses.json'

const CourseCatalog = () => {
  const { ids, toggle, clear } = useFavorites()

  const actions =
    <button type="button" onClick={clear}>Очистить</button>

  return (
    <div className={styles.catalog}>
      <Panel title="Избранное" actions={actions}>
        {
          ids.length > 0 ? (
            <p className={styles.selectedCourse}>
              Выбранные курсы: {ids.map(id => courses.find(course => course.id === id)?.title).join(', ')}
            </p>
          ) : <p>
            Выберите курс из списка ниже
          </p>
        }
      </Panel>

      <Panel title="Cписок курсов">
        <CourseListView
          items={courses}
          ids={ids}
          emptyText="Курсы не найдены"
          onSelect={toggle}
        />
      </Panel>
    </div>
  )
}

export default CourseCatalog
