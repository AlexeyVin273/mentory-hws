import courses from '../courses.json'
import type { Course } from '../course.types'

export function createCourses(count: number): Course[] {
  const titles = courses.map(course => course.title)
  const categories = courses.map(course => course.category)

  const generatedCourses: Course[] = []

  for(let i = 0; i < count; i++) {
    generatedCourses.push({
      id: crypto.randomUUID(),
      title: titles[Math.floor(Math.random() * titles.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      seats: Math.floor(Math.random() * 30),
      version: 1
    })
  }

  return generatedCourses
}
