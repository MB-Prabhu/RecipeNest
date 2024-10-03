import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();

export default function Globalstate({ children }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [recipeDetailList, setRecipeDetailList] = useState(null)
  const [favouriteList, setFavouriteList] = useState([])
  const [noResult, setNoResult] = useState(false)
  const [emptyBar, setEmptyBar] = useState(false)
  const navigate = useNavigate()

  async function fetchRecipe(e) {
    e.preventDefault()
    if (searchQuery.trim()== "") {
      setEmptyBar(true)  
    }
    else {
      setEmptyBar(false)
      try {
        let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`)
        res = await res.json()
        // console.log(res)

        if (res.results == 0) {
          setNoResult(true)
          return false;
        }

        if (res?.data.recipes.length > 0) {
          let { data: { recipes } } = res
          // console.log(recipes)
          // console.log(res?.data.recipes)
          setRecipeList(recipes)
          setLoading(false)
          setNoResult(false)
          setSearchQuery("")
          navigate('/')
        }
      }
      catch (err) {
        console.log(err);
        setLoading(false)
        setNoResult(false)
        setSearchQuery("")
      }
    }
  }

  function handleFavourite(getCurrentItem) {
    console.log(getCurrentItem)

    let cpyFavouriteList = [...favouriteList]
    let index = cpyFavouriteList.findIndex(item => item.id == getCurrentItem.id)
    if (index == -1) {
      cpyFavouriteList.push(getCurrentItem)
    }
    else {
      cpyFavouriteList.splice(index)
    }

    setFavouriteList(cpyFavouriteList)
  }

  return <GlobalContext.Provider value={{ searchQuery, loading, noResult, emptyBar, recipeList, recipeDetailList, setRecipeDetailList, setSearchQuery, fetchRecipe, handleFavourite, favouriteList }}>
    {children}
  </GlobalContext.Provider>
}