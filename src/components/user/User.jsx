import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../features/user/userActions';

function User() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.user);
  let {isLoading, error, user} = state;

  return (
    <div>
      <button onClick={() => dispatch(getUserById(1))}>
        Get user
      </button>
      {isLoading ?
        <div>Loading...</div> : error ?
        <div>{error.message}</div> : user.name ?
        <div>User: {user.name}</div> :
        <div>user not found</div>
      }
    </div>
  )
}

export default User