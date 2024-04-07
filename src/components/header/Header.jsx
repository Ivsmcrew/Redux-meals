import React from 'react'
import { BsBox2Heart } from "react-icons/bs";
import { useSelector } from 'react-redux';
import styles from './Header.module.css'

function Header() {
  const favoritesState = useSelector(state => state.favorites)

  return (
    <header className={styles.header}>
      <BsBox2Heart className={styles.icon}/>
      <span className={styles.counter}>{favoritesState.length}</span>
      <h1 className={styles.meals}>Meals</h1>
    </header>
  )
}

export default Header