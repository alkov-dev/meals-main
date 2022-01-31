import React from "react";
import { Link } from "react-router-dom";


const MealItem = ({meals}) => {
  return (
    <div className='category-list'>
      {meals.map(item => {
        return <div key={item.idMeal} className='category-item'>
          <img src={item.strMealThumb} alt="" />
          <div>
            <p>{item.strMeal}</p>
          <Link className='category-link' to={`/meal/${item.idMeal}`}>Watch recipe</Link>
          </div>
        </div>
      })}
    </div>
  )
}

export default MealItem