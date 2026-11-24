import type { CourseListViewProps } from '../course.types'
import CourseCard from '../CourseCard/CourseCard'
import styles from './CourseListView.module.css'

const CourseListView = ({ items, ids, emptyText, onSelect }: CourseListViewProps) => {
  return (
    <div>
      {
        items.length > 0 ? (
          <ul className={styles.courses}>
            {
              items.map(course => (
                <li key={course.id}>
                  <CourseCard course={course} onSelect={onSelect} isFavorite={ids.includes(course.id)} />
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
