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
    <>
      <p className={css.lessonList} > {!showLesson
          ? ("> ")
          : ("V ")
        }
        <span className={css[status]} onClick={handleClick}>
        {title}{(status === 'locked') && (" - " + status)}
      </span></p>
      {/* {!showLesson
        ? (<h3>{"> " + title}</h3>)
        : (<h3>{"V " + title}</h3>)
      } */}
    </>
  );
};