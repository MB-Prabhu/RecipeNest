import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Recipecard = ({item}) => {
    const [readmore, setReadmore] = useState(false)
  return (
    <div key={item.id} className=' rounded-t-lg shadow-xl flex flex-col gap-2 items-start w-56 h-72'>
        <div className='w-full rounded-t-md overflow-hidden'>
            <img className='rounded-t-lg object-cover w-screen h-40 block w-full hover:scale-110 duration-200' src={item.image_url} alt="" />
        </div>
    <div className='px-2 gap-1 flex flex-col'>
        
    <p className='text-md font-md text-gray-500 font-normal'>{item.publisher}</p>
        <span className='text-lg text-black font-bold'>{readmore ? item.title : item.title.slice(0,50)} {" "} <span className='cursor-pointer text-gray-400' onClick={item.title.length>50 ? ()=> setReadmore(!readmore) : null }>{item.title.length>50 ? (readmore ? "see less" : "...") : null}</span> </span>
       <button 
       className='w-40 border-2 py-1 text-lg bg-black text-white rounded-xl hover:text-gray-900 hover:bg-gray-200 duration-300'>
       <Link to={`/recipe-item/${item.id}`}>Recipe Details</Link>
       </button>
    </div>
    </div>
  )
}

export default Recipecard