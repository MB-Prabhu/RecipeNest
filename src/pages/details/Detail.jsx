import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/Globalstate'

const Detail = ({ }) => {
  const { recipeDetailList, setRecipeDetailList, handleFavourite, favouriteList } = useContext(GlobalContext)

  const { id } = useParams()

  useEffect(() => {
    async function fetchDetail() {
      let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      res = await res.json()
      console.log(res)
      if (res?.data) {
        setRecipeDetailList(res.data?.recipe)
      }
    }
    fetchDetail()
  }, [id])
  return (
    recipeDetailList && (
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>

        <div className='row-start-2 row-start-auto'>
          <div className='h-96 overflow-hidden rounded-xl group'>
            <img className='w-full h-full object-cover group-hover:scale-105 duration-200' src={recipeDetailList.image_url} alt="" />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <span className='text-sm text-cyan-700 font-medium'>{recipeDetailList.publisher}</span>
          <h3 className='font-semibold text-2xl text-black'>{recipeDetailList.title}</h3>

          <div>
            <button
              onClick={() => handleFavourite(recipeDetailList)}
              className='p-3 px-7 rounded-lg text-sm uppercase font-medium tracking-wide bg-black text-white'>
              {favouriteList && favouriteList.length > 0 ? 
              (favouriteList.find((item) => item.id == recipeDetailList.id) != undefined ? "remove from Favourite" : "Save as Favourite" )
              : "save as Favourites"}
            </button>
          </div>

          <span className='text-2xl font-semibold text-black'>
            Ingredients:
          </span>

          <ul className='flex flex-col gap-2'>
            {recipeDetailList.ingredients?.map((item, index) => {
              return (
                <li key={index}>
                  <span className='text-2xl font-semibold text-black'>
                    {item.quantity} {item.unit}
                  </span>
                  <span className='text-2xl font-semibold text-black'>
                    {item.description}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  )
}

export default Detail