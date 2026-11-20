import Panel from '../Panel/Panel'
import CourseListView from '../CourseListView/CourseListView'
import styles from './CourseCatalog.module.css'
import courses from '../courses.json'

const CourseCatalog = () => {
  return (
    <div className={styles.catalog}>
      <Panel title="Сортировка">
        <div className={styles.filtersContainer}>
          <div className={styles.filter}>

          </div>
        </div>
      </Panel>

      <Panel title="Список курсов">
        <CourseListView
          items={courses}
          emptyText="Курсы не найдены"
        />
      </Panel>
    </div>
  )
}

export default CourseCatalog
