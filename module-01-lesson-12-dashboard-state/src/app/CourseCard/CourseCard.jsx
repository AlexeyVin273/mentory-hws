import Panel from '../Panel/Panel'
import styles from './CourseCard.module.css'

export default function CourseCard({ course, onSelect, onToggleFavorite, isFavorite, isSelected }) {
  return (
    <Panel
      title={course.title}
      actions={
        <>
          {onSelect && (
            <button className={styles.selectButton} type="button" aria-pressed={isSelected} onClick={() => onSelect(course.id)}>
              {isSelected ? 'Выбран' : 'Выбрать курс'}
            </button>
          )}
          <button className={styles.favoriteButton} type="button" aria-pressed={isFavorite} onClick={() => onToggleFavorite(course.id)}>
            {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </button>
        </>
      }
    >
      <p>Категория: {course.category}</p>
      <p>Свободных мест: {course.seats}</p>
    </Panel>
  )
}
