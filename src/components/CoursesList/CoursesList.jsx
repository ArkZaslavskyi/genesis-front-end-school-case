import { CourseCard } from "components/CourseCard/CourseCard";
import css from "./CoursesList.module.css";

export const CoursesList = ({ courses }) => {
  console.log('courses:', courses);
  return (
    <ul className={css.list}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ul>
  );
};