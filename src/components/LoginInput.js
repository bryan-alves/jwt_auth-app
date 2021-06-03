import React from 'react'
import styles from './LoginInput.module.css'

const LoginInput = ({ label, id, style, ...props}) => {
  return (
    <div className={styles.login_input} style={style} >
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props}/>
    </div>
  )
}

export default LoginInput
