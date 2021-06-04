import React from 'react'
import styles from './Input.module.css'

const Input = React.forwardRef(({ label, style, ...props }, ref) => {

  return (
    <div className={styles.input} style={style} >
      <label>{label}</label>
      <input {...props} ref={ref}/>
    </div>
  )
})

export default Input
