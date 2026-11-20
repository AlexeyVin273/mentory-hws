import { useCallback, useState } from 'react'
import type { CourseCardOptions } from '../course.types'
import Panel from '../Panel/Panel'
import CourseListView from '../CourseListView/CourseListView'
import styles from './CourseCatalog.module.css'
import courses from '../courses.json'

const stableOptions: CourseCardOptions = { showSeats: true }

const CourseCatalog = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [count, setCount] = useState(0)
  const [stableMode, setStableMode] = useState(false)
  const [freshOptions, setFreshOptions] = useState(false)

  const handleSelect = (id: string) => {
    setSelectedIds(prev => [...prev, id])
  }

  const handleSelectStable = useCallback((id: string) => {
    setSelectedIds(prev => [...prev, id])
  }, [])

  return (
    <div className={styles.catalog}>
      <Panel title="Входные данные">
        <div className={styles.optionsContainer}>
          <fieldset className={styles.stableMode}>
            <legend>Режим вычисления</legend>

            <label>
              <input
                type="radio"
                name="stable-mode"
                checked={!stableMode}
                onChange={() => setStableMode(false)}
              />
              Без useCallback
            </label>

            <label>
              <input
                type="radio"
                name="stable-mode"
                checked={stableMode}
                onChange={() => setStableMode(true)}
              />
              С useCallback
            </label>
          </fieldset>
          <label>
            <input
              type="checkbox"
              checked={freshOptions}
              onChange={event => setFreshOptions(event.target.checked)}
            />
            Создавать новый объект options при каждом рендере
          </label>
          <button className={styles.counter} type="button" onClick={() => setCount(current => current + 1)}>
            Счётчик: {count} (+1)
          </button>
        </div>
      </Panel>

      <Panel title="Результат">
        <div className={styles.filtersContainer}>
          {
            selectedIds.length > 0 ? (
              <p className={styles.selectedCourse}>
                Выбранные курсы: {selectedIds.map(id => courses.find(course => course.id === id)?.title).join(', ')}
              </p>
            ) : <p>
              Выберите курс из списка ниже
            </p>
          }
        </div>
      </Panel>

      <Panel title="Cписок курсов">
        <CourseListView
          items={courses}
          emptyText="Курсы не найдены"
          onSelect={stableMode ? handleSelectStable : handleSelect}
          options={freshOptions ? { ...stableOptions } : stableOptions}
        />
      </Panel>
    </div>
  )
}

export default CourseCatalog
