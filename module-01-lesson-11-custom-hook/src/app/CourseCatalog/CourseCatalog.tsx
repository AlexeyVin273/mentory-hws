import { useState } from 'react'
import Panel from '../Panel/Panel'
import CourseListView from '../CourseListView/CourseListView'
import styles from './CourseCatalog.module.css'
import courses from '../courses.json'

const CourseCatalog = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleSelect = (id: string) => {
    setSelectedIds(prev => [...prev, id])
  }

  return (
    <div className={styles.catalog}>
      <Panel title="Результат">
        <div className={styles.filtersContainer}>
          {
            selectedIds.length > 0 ? (
              <p className={styles.selectedCourse}>
                Выбранные курсы: {selectedIds.map(id => courses.find(course => course.id === id)?.title).join(', ')}
              </p>
            ) : <p>
              Выберите курс из списка ниже
            </p>
          }
        </div>
      </Panel>

      <Panel title="Cписок курсов">
        <CourseListView
          items={courses}
          emptyText="Курсы не найдены"
          onSelect={handleSelect}
          options={{ showSeats: true }}
        />
      </Panel>
    </div>
  )
}

export default CourseCatalog
