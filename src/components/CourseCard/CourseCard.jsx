import { Player } from "components/Player/Player";
import css from "./CourseCard.module.css";

export const Course = ({ course }) => {
  const { previewImageLink, title, lessonsCount, meta, rating } = course;
  const { courseVideoPreview } = meta;

  return (
    <li>
      {/* <img src={previewImageLink + '/cover.webp'} alt="" style={{ height: "400px", width: "auto" }} /> */}
      <h2>{title}</h2>
      {courseVideoPreview?.link &&
        <Player link={courseVideoPreview.link} preview={previewImageLink + '/cover.webp'} controls={false} />}
      <p><span className={css.courseTag}>Total lessons:</span> {lessonsCount}</p>
      {meta?.skills?.length &&
        <p><span className={css.courseTag}>Skills:</span> {course.meta.skills.join(' | ')}</p>}
      <p><span className={css.courseTag}>Rating:</span> { rating }</p>
      
    </li>
  )
};