import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../features/user/userActions';
import styles from './User.module.css'

function User() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.user);
  let {isLoading, error, user} = state;

  return (
    <div className={styles.user}>
      <button className={styles.button} onClick={() => dispatch(getUserById(1))}>
        Get user
      </button>
      {isLoading ?
        <div className={styles.result}>Loading...</div> : error ?
        <div className={styles.result}>{error.message}</div> : user.name ?
        <div className={styles.result}>{user.name}</div> :
        <div className={styles.result}>user not found</div>
      }
    </div>
  )
}

export default User