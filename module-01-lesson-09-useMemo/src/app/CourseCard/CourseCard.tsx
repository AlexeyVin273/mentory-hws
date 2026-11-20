import type { Course, CourseSelectFn } from '../course.types'
import Panel from '../Panel/Panel';

function CourseCard({ course, onSelect }: { course: Course; onSelect?: CourseSelectFn }) {
  return (
    <Panel
      title={course.title}
      actions={
        <button type="button" onClick={() => onSelect?.(course.id)}>
          Выбрать курс
        </button>
      }
    >
      <p>Категория: {course.category}</p>
      <p>Свободных мест: {course.seats}</p>
    </Panel>
  )
}

export default CourseCard;
