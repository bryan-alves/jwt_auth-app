import React from 'react'
import styles from './Input.module.css'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha com um email válido',
  },
  default: {
    //  regex: /(.|\s)/,
    regex: /(.|\s)*\S(.|\s)*/,
    message:
      'Preencha com um valor válido.',
  },
};

const Input = ({ label, id, style, value, type, setValue, placeholder, validate }) => {

  const [error, setError] = React.useState(null)

  function validateType(value) {

    if (types[validate] && !types[validate].regex.test(value)) {
      setError(types[validate].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const handleChange = ({ target }) => {
    setError(null);
    setValue(target)
  }

  const handleBlur = ({ target }) => {
    if (validate)
      validateType(target.value)
  }

  return (
    <div className={styles.input} style={style} >
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={handleChange} placeholder={placeholder} onBlur={handleBlur} />
      {error && <p className={styles.error}>
        {error}
      </p>}
    </div>
  )
}

export default Input
