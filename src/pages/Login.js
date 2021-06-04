import React from 'react'
import Input from '../components/Input'
import styles from './Login.module.css'
import background from './Login.jpg';

const Login = () => {

  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });

  const setValue = (target) => {
    const { id, value } = target;

    setForm({ ...form, [id]: value })
  }

  return (
    <div className={styles.login} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <form>
        <div className={styles.container}>
          <Input
            label={'Email'}
            id="email"
            type="email"
            validate="email"
            placeholder="usuario@email.com"
            value={form.email}
            setValue={setValue} />
          <Input
            label={'Senha'}
            id="password"
            type="password"
            validate="default"
            style={{ marginBottom: '1.25rem' }}
            placeholder="******"
            value={form.password}
            setValue={setValue} />
          <button type="submit" className={styles.button}>Acessar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
