import { Course } from "components/Course/Course";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse, getToken } from "services/Api";

export const CoursePage = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    async function fetchData() {
      await getToken();
      await getCourse(courseId).then((res) => setCourse(res.data));
    }

    fetchData();
  }, [courseId]);

  if (!course) return;

  console.log(course);
  return (
    <>
      <Course {...course} />
    </>
  );
};
