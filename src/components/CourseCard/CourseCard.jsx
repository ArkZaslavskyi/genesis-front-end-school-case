import { Player } from "components/Player/Player";
import { NavLink } from "react-router-dom";
import css from "./CourseCard.module.css";

export const CourseCard = ({ course }) => {
  const { previewImageLink, title, lessonsCount, meta, rating, id } = course;
  const { courseVideoPreview } = meta;

  return (
    <li className={css.courseCard}>
      <h2 className={css.noMargin}><NavLink className={css.courseLink} to={`/courses/${id}`}>{title}</NavLink></h2>
      <div className={css.playerWrapper}>
        {courseVideoPreview?.link &&
          <Player link={courseVideoPreview.link} preview={previewImageLink + '/cover.webp'} controls={false} />}
      </div>
      <div className={css.textWrapper}>
        <p className={css.tagBlock}><span className={css.courseTag}>Total lessons:</span> {lessonsCount}</p>
        {meta?.skills?.length &&
          <p className={css.tagBlock}><span className={css.courseTag}>Skills:</span> {course.meta.skills.join(' | ')}</p>}
        <p className={css.tagBlock}><span className={css.courseTag}>Rating:</span> {rating}</p>
      </div>
    </li>
  )
};