import type { Course } from '../course.types'
import styles from './CourseCard.module.css'

function CourseCard({ course }: { course: Course }) {

  const handleSelectCourse = () => {
    localStorage.setItem('selected-course', course.id);
  }

  return (
    <div className={styles.courseCard}>
      <h3>{course.title}</h3>
      <button type="button" onClick={handleSelectCourse}>
        Выбрать курс
      </button>
    </div>
  )
}

export default CourseCard;
