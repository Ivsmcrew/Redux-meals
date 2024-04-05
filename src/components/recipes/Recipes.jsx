import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeItem from '../recipe-item/RecipeItem';
import { getMeals } from '../../features/meals/mealsActions';

function Recipes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.meals);
  let {isLoading, error, meals} = state;

  useEffect(() => {
    dispatch( getMeals() )
  }, [])

  return (
    <div>
      {
        isLoading ?
          <div>Loading...</div> :
        error ?
          <div>{error.message}</div> :
        meals.length ?
          meals.map((meal) => {
            return(
              <RecipeItem recipe={{
                id: meal.id,
                name: meal.name,
                img: meal.img
              }} />
            )
          }) :
        <div>Meals not found</div>
      }
    </div>
  )
}

export default Recipes