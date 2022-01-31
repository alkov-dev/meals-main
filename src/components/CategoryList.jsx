import React from "react";
import CategoryItem from "./CategotyItem";

const CategoryList = ({ categories }) => {


  return (
    <div className='category-list'>
      {categories.map(item => {
        return <CategoryItem {...item} key={item.idCategory} />
      })}
    </div>
  )
}
export default CategoryList