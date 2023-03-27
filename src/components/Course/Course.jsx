import { Lesson } from "components/Lesson/Lesson";
import { Player } from "components/Player/Player";
import css from "./Course.module.css";

export const Course = ({ title, description, meta, previewImageLink, lessons }) => {
  const { courseVideoPreview } = meta;

  return (
    <>
      <h3 className={css.courseTitle}>{title}</h3>
      <p>{description}</p>
      {courseVideoPreview?.link &&
        (<div className={css.playerWrapper}>
          <Player link={courseVideoPreview.link} preview={previewImageLink + '/cover.webp'} controls={true} />
        </div>)}
      {lessons?.length &&
        (<>
          <p>Lessons list:</p>
          <ul className={css.lessonList}>
          {lessons.sort((ls1, ls2) => (ls1.order - ls2.order))
            .map(lesson => (<Lesson key={lesson.id} {...lesson} />))}
          </ul>
        </>)
      }

  </>);
};