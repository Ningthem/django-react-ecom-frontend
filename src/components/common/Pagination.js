import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class Pagination extends Component {

  render() {
    const { links, page, total_pages, url } = this.props;
    if (!links || total_pages === 1) {
      return null
    }

    const generatePagination = (i, firstDots, lastDots, limit) => {
      var pageNos = [];
      for (i; i <= limit; i++) pageNos.push(i);

      const pageLinks = pageNos.map(num => {
        return (
          <li className={`page-item ${page === num ? 'active' : ''}`} key={num}>
            <Link className={`page-item ${page === num ? 'active' : ''}`} to={url + num} >{num}</Link>
          </li>
        );
      });

      return (
        <Fragment>
          <li className={`page-item ${page === 1 ? 'active' : ''}`}>
            <Link className={`page-item ${page === 1 ? 'active' : ''}`} to={url} aria-label="Previous"><span aria-hidden="true">1</span></Link>
          </li>
          <li className={`page-item disabled ${firstDots}`}>
            <Link className="" to={url} aria-label="Previous"><span aria-hidden="true">...</span></Link>
          </li>
          {pageLinks}
          <li className={`page-item disabled ${lastDots}`}>
            <Link className="" to={url} aria-label="Previous"><span aria-hidden="true">...</span></Link>
          </li>
          <li className={`page-item ${page === total_pages ? 'active' : ''}`}>
            <Link className={`page-item ${page === total_pages ? 'active' : ''}`} to={url + total_pages} aria-label="Previous"><span aria-hidden="true">{total_pages}</span></Link>
          </li>
        </Fragment>
      )
    }

    var renderLinks;
    // 1 ------
    if (total_pages > 5 && page < 4) {
      renderLinks = generatePagination(2, 'd-none', '', 4)
    }

    //2 ---------
    if (total_pages > 5 && (total_pages - page) >= 3 && page > 3) {
      renderLinks = generatePagination(page - 1, '', '', page + 1)
    }

    //3 -------------
    if (total_pages > 5 && (total_pages - page) < 3) {
      renderLinks = generatePagination(total_pages - 3, '', 'd-none', total_pages - 1)
    }

    //4 ----------
    if (total_pages <= 5) {
      renderLinks = generatePagination(2, 'd-none', 'd-none', total_pages - 1)
    }

    return (
      <nav className="pro-pagination-style mt-30 text-center" aria-label="">
        <ul className="">
          <li className={` ${!links.previous ? 'disabled' : ''}`}>
            <Link className="" to={links.previous ? url + (page - 1) : '#'} aria-label="Previous"><span aria-hidden="true">«</span></Link>
          </li>

          {renderLinks}
          <li className={`${!links.next ? 'disabled' : ''}`}>
            <Link className="" to={links.next ? url + (page + 1) : '#'} aria-label="Next"><span aria-hidden="true">»</span></Link>
          </li>
        </ul>
      </nav>
    );
  };
};

export default Pagination;
