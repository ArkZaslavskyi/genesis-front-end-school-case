import { Player } from "components/Player/Player";
import { NavLink } from "react-router-dom";
import css from "./CourseCard.module.css";

export const CourseCard = ({ course }) => {
  const { previewImageLink, title, lessonsCount, meta, rating, id } = course;
  const { courseVideoPreview } = meta;

  return (
    <li>
      <h2><NavLink className={css.courseLink} to={`/courses/${id}`}>{title}</NavLink></h2>
      {courseVideoPreview?.link &&
        <Player link={courseVideoPreview.link} preview={previewImageLink + '/cover.webp'} controls={false} />}
      <p><span className={css.courseTag}>Total lessons:</span> {lessonsCount}</p>
      {meta?.skills?.length &&
        <p><span className={css.courseTag}>Skills:</span> {course.meta.skills.join(' | ')}</p>}
      <p><span className={css.courseTag}>Rating:</span> { rating }</p>
      
    </li>
  )
};