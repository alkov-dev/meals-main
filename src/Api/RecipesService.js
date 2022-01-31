import axios from 'axios'

export default class RecireService {
  static async getAllCategories() {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    return response.data.categories
  }

  static async getMealByID(mealID) {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    return response.data.meals[0]
  }
  static async getFilterCategories(query) {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
    return response.data.meals
  }
  static async getMealByName(name) {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    return response.data.meals
  }
}
