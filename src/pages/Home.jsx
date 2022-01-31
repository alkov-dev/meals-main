import React, { useEffect, useState } from 'react';
import RecireService from '../Api/RecipesService';
import Spinner from '../components/Spinner'
import CategoryList from '../components/CategoryList';
import Pagination from '../components/Pagination'





const Home = () => {

  const [categories, setCategories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(8)

  useEffect( () => {
    fetchCategories()
  }, [currentPage])


  async function fetchCategories() {
    const data = await RecireService.getAllCategories()
    setCategories(data)
  }

  const indexLast = currentPage * limit
  const indexFirst =  indexLast - limit
  const currentCategories = categories.slice(indexFirst, indexLast)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="Home">
      {!categories.length ? <Spinner /> :
      (<CategoryList categories={currentCategories} />)
      }
      <Pagination
        limit={limit}
        totalCat={categories.length}
        paginate={paginate}
       />
    </div>
  );
}

export default Home;
