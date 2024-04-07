import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorites } from '../../features/favorites/favoritesSlice';
import styles from './RecipeItem.module.css'

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
    <div className={styles.recipe}>
      <h2 className={styles.name}>{recipe.name}</h2>
      <img className={styles.img} src={recipe.img} alt={recipe.name} />
      <button className={styles.button} onClick={() => handleAddToFavorites(recipe)}>
        {isItInFavorites() ?
          'Remove from favorites' :
          'Add to favorites'
        }
      </button>
    </div>
  )
}

export default RecipeItem