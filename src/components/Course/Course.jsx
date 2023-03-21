import { Lesson } from "components/Lesson/Lesson";
import { Player } from "components/Player/Player";
import css from "./Course.module.css";

export const Course = ({ title, description, meta, previewImageLink, lessons }) => {
  const { courseVideoPreview } = meta;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      {courseVideoPreview?.link &&
        <Player link={courseVideoPreview.link} preview={previewImageLink + '/cover.webp'} controls={true} />}
      {lessons?.length &&
        (<>
          <p>Lessons list:</p>
          <ul className={css.lessonList}>
          {lessons.map(lesson => (<Lesson key={lesson.id} {...lesson}/>))}
          </ul>
        </>)
      }

  </>);
};