import courses from '../courses.json'
import type { Course } from '../course.types'
import CourseCard from '../CourseCard/CourseCard'
import { useSelection } from '../hooks/useSelection'
import styles from './CoursesBoard.module.css'
import CourseListView from '../CourseListView/CourseListView'

const catalog: Course[] = courses

export default function CoursesBoard() {
  const { selectedId, select, reset } = useSelection()
  const selectedCourse = catalog.find(course => course.id === selectedId)

  return (
    <div className={styles.coursesBoard}>
      <section className={styles.selection} aria-label="Текущий выбор">
        <div role="status">
          <p className={styles.label}>Ваш выбор</p>
          <p className={styles.selectionTitle}>
            {selectedId === null ? 'Курс пока не выбран' : selectedCourse?.title ?? 'Курс недоступен'}
          </p>
        </div>
        <button className={styles.reset} type="button" onClick={reset} disabled={selectedId === null}>
          Сбросить выбор
        </button>
      </section>
      <section aria-labelledby="cards-heading">
        <div className={styles.sectionHeader}>
          <h2 id="cards-heading">Каталог курсов</h2>
          <span>{catalog.length} курса</span>
        </div>
        <div className={styles.cards}>
          {catalog.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              isSelected={selectedId === course.id}
              onSelect={select}
            />
          ))}
        </div>
      </section>
      <section className={styles.listSection} aria-labelledby="list-heading">
        <div className={styles.sectionHeader}>
          <h2 id="list-heading">Быстрый выбор</h2>
          <span>Те же курсы в списке</span>
        </div>
        <CourseListView
          items={catalog}
          emptyText="Курсы не найдены"
          onSelect={select}
          selectedId={selectedId}
        />
      </section>
    </div>
  )
}
