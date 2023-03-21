import { useState } from "react";
import css from "./Lesson.module.css";

export const Lesson = ({ title, status }) => {
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
        <p>Lessons data...</p>
      }
    </li>
  );
};