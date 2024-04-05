import React from 'react'
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
  const favoritesState = useSelector(state => state.favorites)

  return (
    <header>
      <FaHeart />
      <span>{favoritesState.length}</span>
    </header>
  )
}

export default Header