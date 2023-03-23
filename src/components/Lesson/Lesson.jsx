import { Player } from "components/Player/Player";
import { useState } from "react";
import css from "./Lesson.module.css";

export const Lesson = ({ title, status, link, previewImageLink }) => {
  const [showLesson, setShowLesson] = useState(false);

  const handleClick = () => {
    if (status !== 'locked') {
      setShowLesson(!showLesson)
    }
  }

  return (
    <li className={css.lessonList}>
      <div className={css.titleWrapper} > {!showLesson
          ? ("> ")
          : ("V ")
        }
        <span className={css[status]} onClick={handleClick}>
        {title}{(status === 'locked') && (" - " + status)}
      </span></div>
      {showLesson &&
        <Player
          link={link}
          preview={previewImageLink + '/cover.webp'}
          controls={true}
          name={title}
        />
      }
    </li>
  );
};