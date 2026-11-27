import { useState } from 'react'
import coursesData from '../courses.json'
import type { Course } from '../course.types'
import CourseCard from '../CourseCard/CourseCard'
import styles from './CoursesBoard.module.css'

export default function CoursesBoard() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [courses, setCourses] = useState<Course[]>(coursesData)

  const handleSave = (updatedCourse: Course) => {
    setCourses(previous =>
      previous.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    )
  }

  return (
    <div className={styles.coursesBoard}>
      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          isSelected={selectedId === course.id}
          onSelect={setSelectedId}
          onSave={handleSave}
        />
      ))}
    </div>
  )
}
