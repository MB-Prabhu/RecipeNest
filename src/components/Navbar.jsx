import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/Globalstate';

const Navbar = () => {
    const {searchQuery, setSearchQuery, fetchRecipe} = useContext(GlobalContext)



  return (
    <div className='border-2 mb-10 p-5 flex justify-between items-center mx-auto flex-col lg:flex-row gap-3 lg:gap-0 '>
       <Link to={'/'}> <h1 className='border-0 text-black text-3xl font-semibold lg:text-4xl '>Recipe Nest</h1> </Link>

      <form onSubmit={fetchRecipe}>
      <input type="text" 
        placeholder='Enter the Food name...'
        value={searchQuery}
        className='border-2 border-black text-lg w-80 lg:w-92  rounded-full px-3 h-10 shadow-xl outline-none focus:border-2 focus:border-gray-500 focus:w-96 duration-200'
        onChange={(e)=> setSearchQuery(e.target.value)}
        />
      </form>

    <ul className='flex gap-5 items-center justify-center mr-2 text-2xl'>

        <li>
        <Link to={"/"} className='text-black hover:text-gray-500 duration-300'>Home</Link>
        </li>

        <li>
        <Link to={"/favourites"} className='text-black hover:text-gray-500 duration-300'>Favourites</Link>
        </li>
    </ul>

    </div>
  )
}

export default Navbar