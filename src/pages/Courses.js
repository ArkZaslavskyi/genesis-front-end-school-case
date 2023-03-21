import { CoursesList } from "components/CoursesList/CoursesList";
import { useEffect, useState } from "react";
import { getCourses, getToken } from "services/Api";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      await getToken();
      await getCourses().then((res) => setCourses(res.data.courses));
    }

    fetchData();
  }, []);

  if (!courses.length)
    return (
      <>
        <h3>Courses data is loading...</h3>
      </>
    );
  return (
    <>
      <CoursesList courses={courses} />
    </>
  );
};
