import { useState } from 'react'
import Panel from '../Panel/Panel'
import CourseListView from '../CourseListView/CourseListView'
import styles from './CourseCatalog.module.css'
import courses from '../courses.json'

const CourseCatalog = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)

  const courseSelectHandler = (id: string) => {
    setSelectedCourseId(id)
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

      <Panel title="Счётчик">
        <div className={styles.filtersContainer}>

        </div>
      </Panel>

      <Panel title="Cписок курсов">
        <CourseListView
          items={courses}
          emptyText="Курсы не найдены"
          onSelect={courseSelectHandler}
        />
      </Panel>
    </div>
  )
}

export default CourseCatalog
