import { Course } from "components/Course/Course";
import css from "./CoursesList.module.css";

export const CoursesList = ({courses}) => {
  console.log('courses:', courses);
  return (
    <ul className={css.list}>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </ul>
  );
};