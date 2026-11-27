import { useState } from 'react'
import courses from '../courses.json'
import type { Course } from '../course.types'
import CourseCard from '../CourseCard/CourseCard'
import styles from './CoursesBoard.module.css'

const catalog: Course[] = courses

export default function CoursesBoard() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className={styles.coursesBoard}>
      {catalog.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          isSelected={selectedId === course.id}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  )
}
