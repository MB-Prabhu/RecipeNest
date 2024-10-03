import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Favourites from './pages/favourites/Favourites';
import Detail from './pages/details/Detail';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
     <div className=" text-black bg-white ">
     <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/recipe-item/:id' element={<Detail />} />
      </Routes>
     </div>
    </div>
  )
}

export default App