import { memo } from 'react';
import type { Course, CourseCardOptions, CourseSelectFn } from '../course.types'
import Panel from '../Panel/Panel';

function CourseCard({ course, onSelect, options }: { course: Course; onSelect: CourseSelectFn; options: CourseCardOptions }) {
  console.log(`CourseCard: ${course.title} rendered`);
  return (
    <Panel
      title={course.title}
      actions={
        <button type="button" onClick={() => onSelect(course.id)}>
          Выбрать курс
        </button>
      }
    >
      <p>Категория: {course.category}</p>
      {options.showSeats && <p>Свободных мест: {course.seats}</p>}
    </Panel>
  )
}

export default memo(CourseCard);
