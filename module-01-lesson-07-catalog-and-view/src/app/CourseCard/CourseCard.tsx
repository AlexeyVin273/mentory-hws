import type { Course } from '../course.types'
import Panel from '../Panel/Panel';

function CourseCard({ course }: { course: Course }) {

  const handleSelectCourse = () => {
    localStorage.setItem('selected-course', course.id);
  }

  return (
    <Panel
      title={course.title}
      actions={
        <button type="button" onClick={handleSelectCourse}>
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
