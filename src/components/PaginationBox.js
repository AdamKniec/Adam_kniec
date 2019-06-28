import React from "react";

const PaginationBox = props => {
  const pageLinks = [];
  console.log(pageLinks);
  let checkIfLastPaginItem =
    props.pages + 1 === props.currentPage ? "disabled" : "";
  let checkIfFirstPaginItem = props.currentPage === 1 ? "disabled" : "";
  for (let i = 0; i < props.pages + 1; i++) {
    let active = props.currentPage === i + 1 ? "active" : "";
    pageLinks.push(
      <li className={`page-item ${active}`} key={i}>
        <span className="page-link" onClick={() => props.nextPage(i + 1)}>
          {i + 1}
          <span className="sr-only">(current)</span>
        </span>
      </li>
    );
  }
  return (
    <div className="pagination-container">
      <nav aria-label="Data grid navigation">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${checkIfFirstPaginItem}`}>
            <span
              className="page-link"
              tabIndex="-1"
              onClick={i => props.nextPage(props.currentPage - 1)}
            >
              Previous
            </span>
          </li>
          {pageLinks}

          <li className={`page-item ${checkIfLastPaginItem}`}>
            <span
              className="page-link"
              tabIndex="-1"
              onClick={i => props.nextPage(props.currentPage + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default PaginationBox;
