import React, { useEffect, useState } from "react";
import RecireService from "../Api/RecipesService";
import MealItem from "../components/MealItem";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

const Search = () => {

  const [input, setInput] = useState(' ')
  const [meal, setMeal] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(8)

  useEffect( () => {
    fetchMeal(input)
  }, [input])


  async function fetchMeal(query) {
    const text = query
    const data = await RecireService.getMealByName(text)
    setMeal(data)
  }


  const indexLast = currentPage * limit
  const indexFirst =  indexLast - limit
  const currentMeals = meal.slice(indexFirst, indexLast)

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="search">
      <div className='container'>
      <input placeholder='Search' onChange={(evt) => setInput(evt.target.value)} type="text" />


      {
      meal ?
      (!meal.length ? <Spinner /> : (<MealItem meals={currentMeals} />)) : <h3  className='no-meal'>No meal</h3>
      }
      <Pagination
        limit={limit}
        totalCat={meal.length}
        paginate={paginate}
      />
    </div>
    </div>
  )
}

export default Search;