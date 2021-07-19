import React, {useState} from 'react';

function Pagination({postPerPage, totalPost, paginate}) {
  // Set up Active
  const [active, SetActive] = useState(0);
  const handleClick = index => {
    SetActive(index);
  };
  const pageNumbers = [];
  //   Scroll Top Pagination
  const scrollToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: 'smooth'
    });
  };
  // Loop i<= 90 / 9 = 10 pages
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
          <nav>
            <ul>
              {pageNumbers.map((number, index) => {
                return (
                        <li
                                key={index}
                                onClick={() => {
                                  handleClick(index);
                                  paginate(number);
                                  scrollToTop();
                                }} // pass the index
                                className={active === index ? 'active' : 'unactive'}
                        >
                          {number}
                        </li>
                );
              })}
            </ul>
          </nav>
  );
}

export default Pagination;
