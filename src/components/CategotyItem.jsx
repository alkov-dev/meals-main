import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {

  const { strCategoryThumb, strCategory} = props

  return (
    <div className='category-item'>
      <img src={strCategoryThumb} alt="" />
      <div>
        <p>{strCategory}</p>
      <Link className='category-link' to={`/category/${strCategory}`}>Watch category</Link>
      </div>
    </div>
  )
}
export default CategoryItem