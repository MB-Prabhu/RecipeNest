import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Globalstate'
import Recipecard from '../../components/Recipecard'

const Favourites = () => {
  const {favouriteList} = useContext(GlobalContext)

  return (
    <div className='container flex flex-wrap gap-10 mx-auto justify-center items-center '>
      {
        favouriteList && favouriteList.length>0 ? (
          favouriteList.map((item, idx)=>  <Recipecard item={item} key={idx}/>)
        ) : (
          <div className='mx-auto mt-20 text-xl lg:text-3xl text-black tracking-widest font-bold '>
            Nothing is added...
          </div>
        )
      }
    </div>
  )
}

export default Favourites