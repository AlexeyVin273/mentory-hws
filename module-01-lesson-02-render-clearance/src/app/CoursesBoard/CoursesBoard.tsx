import courses from '../courses.json'
import CourseCard from '../CourseCard/CourseCard';
import styles from './CoursesBoard.module.css'

const CoursesBoard = () => {
  return (
    <div className={styles.coursesBoard}>
      {
        courses.map(course => <CourseCard course={course} key={course.id} />)
      }
    </div>
  );
}

export default CoursesBoard;
