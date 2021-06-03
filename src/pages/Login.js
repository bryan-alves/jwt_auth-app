import React from 'react'
import LoginInput from '../components/LoginInput'
import styles from './Login.module.css'
import background from './Login.jpg';

const Login = () => {

  return (
    <div className={styles.login} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <form>
        <div className={styles.container}>
          <LoginInput label={'Email'} id="email" type="email" placeholder="usuario@email.com" />
          <LoginInput label={'Senha'} id="password" type="password" style={{ marginBottom: '1.25rem' }} placeholder="******" />
          <button type="submit" className={styles.button}>Acessar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
