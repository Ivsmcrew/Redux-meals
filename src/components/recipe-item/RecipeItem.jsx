import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorites } from '../../features/favorites/favoritesSlice';

function RecipeItem({recipe}) {
  const favoritesState = useSelector(state => state.favorites)
  const dispatch = useDispatch();

  function handleAddToFavorites(recipe) {
    dispatch(toggleFavorites(recipe))
  }
  function isItInFavorites() {
    let isItInFavorites = false;
    favoritesState.forEach((item) => {
      if (recipe.id === item.id) {
        isItInFavorites = true
      }
    })
    return isItInFavorites
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.img} alt={recipe.name} width={200}/>
      <button onClick={() => handleAddToFavorites(recipe)}>
        {isItInFavorites() ?
          'Remove from favorites' :
          'Add to favorites'
        }
      </button>
    </div>
  )
}

export default RecipeItem