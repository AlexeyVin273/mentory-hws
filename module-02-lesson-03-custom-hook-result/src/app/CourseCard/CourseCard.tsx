import type { Course } from '../course.types'
import styles from './CourseCard.module.css'

type CourseCardProps = {
  course: Course
  isSelected: boolean
  onSelect: (id: string) => void
}

export default function CourseCard({ course, isSelected, onSelect }: CourseCardProps) {
  return (
    <div className={styles.courseCard}>
      <h3>{course.title}</h3>
      <p>Категория: {course.category}</p>
      <p>Свободных мест: {course.seats}</p>
      <button type="button" aria-pressed={isSelected} onClick={() => onSelect(course.id)}>
        {isSelected ? 'Выбран' : 'Выбрать курс'}
      </button>
    </div>
  )
}