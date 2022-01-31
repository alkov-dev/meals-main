import Pagination from "../components/Pagination";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import RecireService from "../Api/RecipesService";
import MealItem from "../components/MealItem";
import Spinner from "../components/Spinner";


const MealList = () => {

  const [meals, setMeals] = useState([])
  const {name} = useParams();
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(8)

  const {goBack} = useHistory();


  useEffect(() => {
    fetchFilterCategories(name)
  }, [name])



  async function fetchFilterCategories(name) {
    const mealName = name
    const data = await RecireService.getFilterCategories(mealName)
    setMeals(data)
  }

  const indexLast = currentPage * limit
  const indexFirst =  indexLast - limit
  const currentMeals = meals.slice(indexFirst, indexLast)

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container'>
      <button className='go-back' onClick={goBack} >go back</button>
      <div>
        {!meals.length ? <Spinner /> : (<MealItem meals={currentMeals} />)}
      </div>
      <Pagination
        limit={limit}
        totalCat={meals.length}
        paginate={paginate}
      />
    </div>
  )
}

export default MealList