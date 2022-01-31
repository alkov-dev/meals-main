import React from 'react'

const Pagination = ({limit, totalCat, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCat / limit); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='container page-container'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
