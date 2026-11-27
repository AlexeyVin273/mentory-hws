import type { Course } from '../course.types'
import styles from './CourseListView.module.css'

export type CourseListViewProps = {
  items: Course[]
  emptyText: string
  onSelect: (id: string) => void
  selectedId: string | null
}

const CourseListView = ({ items, emptyText, onSelect, selectedId }: CourseListViewProps) => {
  return (
    <div>
      {
        items.length > 0 ? (
          <ul className={styles.courses}>
            {
              items.map(course => (
                <li key={course.id} className={course.id === selectedId ? styles.selected : undefined}>
                  <div className={styles.details}>
                    <h3>{course.title}</h3>
                    <p>{course.category} · {course.seats === 0 ? 'Нет свободных мест' : `Мест: ${course.seats}`}</p>
                  </div>
                  <button type="button" aria-pressed={course.id === selectedId} onClick={() => onSelect(course.id)}>
                    {course.id === selectedId ? 'Выбран' : 'Выбрать'}
                  </button>
                </li>
              ))
            }
          </ul>
        ) : (
          <p className={styles.empty}>{emptyText}</p>
        )
      }
    </div>
  )
}

export default CourseListView
