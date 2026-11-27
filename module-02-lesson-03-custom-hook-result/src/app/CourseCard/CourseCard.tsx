import type { Course } from '../course.types'
import styles from './CourseCard.module.css'

type CourseCardProps = {
  course: Course
  isSelected: boolean
  onSelect: (id: string) => void
}

export default function CourseCard({ course, isSelected, onSelect }: CourseCardProps) {
  return (
    <article className={`${styles.courseCard} ${isSelected ? styles.selected : ''}`}>
      <span className={styles.category}>{course.category}</span>
      <h3>{course.title}</h3>
      <p className={styles.seats}>{course.seats === 0 ? 'Свободных мест пока нет' : `Свободных мест: ${course.seats}`}</p>
      <button type="button" aria-pressed={isSelected} onClick={() => onSelect(course.id)}>
        {isSelected ? 'Выбран' : 'Выбрать курс'}
      </button>
    </article>
  )
}
