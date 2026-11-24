import CourseCard from '../CourseCard/CourseCard'
import styles from './CourseListView.module.css'

export default function CourseListView({ items, emptyText, onSelect, onToggleFavorite, favoriteIds, selectedCourseId }) {
  if (items.length === 0) return <p className={styles.empty}>{emptyText}</p>

  return (
    <ul className={styles.courses}>
      {items.map(course => (
        <li key={course.id}>
          <CourseCard
            course={course}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favoriteIds.includes(course.id)}
            isSelected={selectedCourseId === course.id}
          />
        </li>
      ))}
    </ul>
  )
}
