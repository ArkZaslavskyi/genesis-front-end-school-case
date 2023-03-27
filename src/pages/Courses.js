import { CoursesList } from "components/CoursesList/CoursesList";
import { Pagination } from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { getCourses, getToken } from "services/Api";

const COURSES_ON_PAGE = 10;

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [currentPageCourses, setCurrentPageCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await getToken();
      await getCourses().then((res) => setCourses(res.data.courses));
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!!courses.length) {
      setTotalPages(Math.ceil(courses.length / COURSES_ON_PAGE));
    }
  }, [courses.length]);

  useEffect(() => {
    if (!!courses.length) {
      setCurrentPageCourses(
        courses.slice((currentPage - 1) * 10, currentPage * 10)
      );
    }
  }, [courses, courses.length, currentPage]);

  return (
    <div className="Container">
      {!courses.length || !currentPage || !totalPages ? (
        <h3>Courses data is loading...</h3>
      ) : (
        <>
          <section className="section">
            <CoursesList courses={currentPageCourses} />
          </section>
          <section className="section">
            <Pagination {...{ currentPage, setCurrentPage, totalPages }} />
          </section>
        </>
      )}
    </div>
  );
};
