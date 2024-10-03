import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Globalstate'
import Recipecard from '../../components/Recipecard'

const Homepage = () => {

  const {recipeList, loading, noResult , emptyBar} = useContext(GlobalContext)

  if(loading) return <div className='mt-20 text-xl lg:text-3xl text-black tracking-widest font-bold text-center'>Loading...Please wait</div>
  if(noResult) return <div className='mt-20 text-xl lg:text-3xl text-black tracking-widest font-bold text-center'>Sorry Recipe not available...</div>
  if(emptyBar) return <div className='mt-20 text-xl lg:text-3xl text-black tracking-widest font-bold text-center'> Search something... </div>
  return (
    <div className='container flex flex-wrap gap-10 mx-auto justify-center items-center '>
      {
        recipeList && recipeList.length>0 ? (
          recipeList.map((item)=>  <Recipecard item={item} key={item.id}/>)
        ) : (
          <div className='mx-auto mt-20 text-xl lg:text-3xl text-black tracking-widest font-bold '>
            Nothing show please search something...
          </div>
        )
      }
    </div>
  )
}

export default Homepage