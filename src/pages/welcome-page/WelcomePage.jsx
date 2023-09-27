import React, { useContext } from 'react'
import { UserContext, UserProvider } from '../../services/context/UserContext'
import Navbar from '../../components/navbar/Navbar';
import style from './welcomePage.module.css'

function WelcomePage() {
  // Accessing the userDetails in the welcome page
  const {userDetails} = useContext(UserContext);
  console.log('welcom userDetails: ', userDetails)

  const userName = userDetails && userDetails.user && userDetails.user.firstName;
  const details = JSON.stringify(userDetails.firstName, null, 2)
  const name = (`${userDetails.firstName}  ${userDetails.lastName}`)
  return (
    
      <div>
      <Navbar/>
      <div className={style.container}>
        <h1 className={style.welcome}>Welcome<span>!</span></h1>
        <p className={style.name}>{userName}</p>
        <p> {name}</p>
       
      </div>
      
    </div>
   
    
  )
}

export default WelcomePage
