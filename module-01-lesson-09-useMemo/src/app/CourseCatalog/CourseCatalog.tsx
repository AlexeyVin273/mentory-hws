import { useMemo, useState } from 'react'
import type { Course, CourseSort } from '../course.types'
import Panel from '../Panel/Panel'
import CourseListView from '../CourseListView/CourseListView'
import styles from './CourseCatalog.module.css'
import { createCourses } from '../features/createCourses'

const courses = createCourses(2000)

function sortCourses(items: Course[], sort: CourseSort): Course[] {
  if (sort === 'default') return items

  console.log('Вычисляем сортировку курсов')
  const sorted = [...items]
  switch (sort) {
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title))
    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title))
    case 'category':
      return sorted.sort((a, b) => a.category.localeCompare(b.category))
    case 'seats':
      return sorted.sort((a, b) => b.seats - a.seats)
  }
}

type SortedListProps = { items: Course[]; sort: CourseSort }

function PlainCourseList({ items, sort }: SortedListProps) {
  const sorted = sortCourses(items, sort)
  return <CourseListView items={sorted} emptyText="Курсы не найдены" />
}

function MemoCourseList({ items, sort }: SortedListProps) {
  const sorted = useMemo(() => sortCourses(items, sort), [items, sort])
  return <CourseListView items={sorted} emptyText="Курсы не найдены" />
}

const CourseCatalog = () => {
  const [sort, setSort] = useState<CourseSort>('default')
  const [count, setCount] = useState(0)
  const [memoMode, setMemoMode] = useState(false)

  return (
    <div className={styles.catalog}>
      <Panel title="Сортировка">
        <div className={styles.filtersContainer}>
          <div className={styles.filter}>
            <label htmlFor="course-sort">Сортировка</label>
            <select
              id="course-sort"
              value={sort}
              onChange={event => setSort(event.target.value as CourseSort)}
            >
              <option value="default">По умолчанию</option>
              <option value="title-asc">По названию (А→Я)</option>
              <option value="title-desc">По названию (Я→А)</option>
              <option value="category">По категории</option>
              <option value="seats">По количеству свободных мест</option>
            </select>
          </div>
          <fieldset className={styles.sortMode}>
            <legend>Режим вычисления</legend>

            <label>
              <input
                type="radio"
                name="sort-mode"
                checked={!memoMode}
                onChange={() => setMemoMode(false)}
              />
              Без useMemo
            </label>

            <label>
              <input
                type="radio"
                name="sort-mode"
                checked={memoMode}
                onChange={() => setMemoMode(true)}
              />
              С useMemo
            </label>
          </fieldset>
          <button type="button" onClick={() => setCount(current => current + 1)}>
            Счётчик: {count} (+1)
          </button>
        </div>
      </Panel>

      <Panel title="Список курсов">
        {memoMode
          ? <MemoCourseList items={courses} sort={sort} />
          : <PlainCourseList items={courses} sort={sort} />}
      </Panel>
    </div>
  )
}

export default CourseCatalog
