import css from "./Pagination.module.css";

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pgNums = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pgNums.push(i);
  };

  return (
    <>
      <ul className={css.pagination}>
      {pgNums.map(pg => (
        <li
          key={pg}
          className={pg === currentPage ? css.pgNumCurrent : css.pgNum}
          onClick={() => setCurrentPage(pg)}
        >{pg}</li>))}
      </ul>
    </>
  );
};