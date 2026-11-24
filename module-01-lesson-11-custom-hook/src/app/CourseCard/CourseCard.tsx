import { memo } from 'react';
import type { Course, CourseSelectFn } from '../course.types'
import Panel from '../Panel/Panel';

function CourseCard({
  course,
  onSelect,
  isFavorite
}: {
  course: Course;
  onSelect: CourseSelectFn;
  isFavorite: boolean
}) {
  return (
    <Panel
      title={course.title}
      actions={
        <button type="button" onClick={() => onSelect(course.id)}>
          {
            isFavorite
              ? "Убрать из избранного"
              : "Добавить в избранное"
          }
        </button>
      }
    >
      <p>Категория: {course.category}</p>
      <p>Свободных мест: {course.seats}</p>
    </Panel>
  )
}

export default CourseCard;
