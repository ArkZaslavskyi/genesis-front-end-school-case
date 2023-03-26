import { CoursesList } from "components/CoursesList/CoursesList";
import { useEffect, useState } from "react";
import { getCourses, getToken } from "services/Api";
// import css from "theme/Globalstyle";

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

  return (
    <div className="Container">
      {!courses.length ? (
        <h3>Courses data is loading...</h3>
      ) : (
        <CoursesList courses={courses} />
      )}
    </div>
  );
};
