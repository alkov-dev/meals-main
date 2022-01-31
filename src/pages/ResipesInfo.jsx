import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import RecireService from "../Api/RecipesService";
import Spinner from "../components/Spinner";

const ResipeInfo = () => {

  const [meal, setMeal] = useState()

  const {id} = useParams()

  const {goBack} = useHistory()

  useEffect(() => {
    fetchFilterById(id)
  }, [id])


  async function fetchFilterById(id) {
    const mealId = id
    const data = await RecireService.getMealByID(mealId)
    setMeal(data)
  }

  return(
    <div className='container'>
      <div  className='recipe-info'>
      {!meal ? <Spinner /> :
        (<div className='resipe'>
          <button className='go-back' onClick={goBack}>go back</button>
          <img src={meal.strMealThumb} alt="" />
          <h3 className='meal-name'>{meal.strMeal}</h3>
          <p>Category:  {meal.strCategory}</p>
          <p>Area:  {meal.strArea}</p>
          <p>Instructions: {meal.strInstructions}</p>
          <iframe className='meal-youtube'
        title={meal.idMeal}
        src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
        allowFullScreen/>
      </div> )

      }

    </div>
    </div>
  )
}

export default ResipeInfo