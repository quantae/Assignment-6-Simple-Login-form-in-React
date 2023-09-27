import React from 'react'
import style from './LoginPage.module.css'
import LoginForm from '../../components/forms/LoginForm'

function LoginPage() {
  return (
    <div className={style.container}>
     
      <LoginForm/>
    </div>
  )
}

export default LoginPage
