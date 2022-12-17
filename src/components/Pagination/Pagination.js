import React from "react";
import classes from './pagination.module.scss';

const Pagination = ({ dataPerPage, totalData, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.pagination}>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <button onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
