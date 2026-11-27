import CourseCard from './CourseCard'
import type { Course } from '../course.types'

const course: Course = {
  id: 'sample-react',
  title: 'Учебный React',
  category: 'frontend',
  seats: 10,
  version: 1,
}

const onSelect = (id: string): void => {
  console.log(id)
}

// Проверяется TypeScript, но не подключается к интерфейсу.
export const validExample = <CourseCard course={course} isSelected={false} onSelect={onSelect} />

// @ts-expect-error: isSelected принимает boolean, а не строку.
export const invalidExample = <CourseCard course={course} isSelected="yes" onSelect={onSelect} />