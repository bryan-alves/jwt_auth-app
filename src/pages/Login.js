import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Input from '../components/Input'
import styles from './Login.module.css'
import background from './Login.jpg';

const Login = () => {

  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (form) => {
    setLoading(true)

    try {
      const { data } = await axios.post('http://localhost:8000/api/login', form)

      window.localStorage.setItem('token', data.access_token)
      setError(null)
    } catch (err) {
      const { data } = err.response
      setError(data.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.login} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          {error && <p>{error}</p>}
          <Input
            label={'Email'}
            placeholder="usuario@email.com"
            {...register("email", {
              required: true, pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email inválido'
              }
            })}
            onChange={() => clearErrors("email")}
            disabled={loading}
          />
          {errors.email && errors.email.type === 'required' && <p>Preencha este campo</p>}
          {errors.email && <p>{errors.email.message}</p>}

          <Input
            label={'Senha'}
            style={{ marginBottom: '1.25rem' }}
            type={'password'}
            placeholder="******"
            {...register("password", { required: true })}
            disabled={loading}
          />
          {errors.password && errors.password.type === 'required' && <p>Preencha este campo</p>}

          <button type="submit" className={styles.button} disabled={loading}>
            {!loading ? 'Acessar' : 'Aguarde...'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
