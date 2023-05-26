import React from 'react'
import './account.css'
import { useAuth0 } from "@auth0/auth0-react";
import Favourites from '../Components/Favourites';
const Account = () => {
    const {user} = useAuth0();
  return (
    <div className='account_container'>
      <h1>{user.name}</h1>
      <Favourites/>
    </div>
  )
}

export default Account
