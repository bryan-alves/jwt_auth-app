import React from 'react'
import { useForm } from 'react-hook-form'

import Input from '../components/Input'
import styles from './Login.module.css'
import background from './Login.jpg';
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {

  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

  const Auth = React.useContext(AuthContext)

  const onSubmit = async (form) => {
    Auth.setLoading(true)

    const { email, password } = form;

    await Auth.login(email, password)

    Auth.setLoading(false)
  }

  return (
    <div className={styles.login} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          {Auth.error && <p>{Auth.error}</p>}
          {Auth.user && <p>{Auth.user.name}</p>}
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
            disabled={Auth.loading}
          />
          {errors.email && errors.email.type === 'required' && <p>Preencha este campo</p>}
          {errors.email && <p>{errors.email.message}</p>}

          <Input
            label={'Senha'}
            style={{ marginBottom: '1.25rem' }}
            type={'password'}
            placeholder="******"
            {...register("password", { required: true })}
            disabled={Auth.loading}
          />
          {errors.password && errors.password.type === 'required' && <p>Preencha este campo</p>}

          <button type="submit" className={styles.button} disabled={Auth.loading}>
            {!Auth.loading ? 'Acessar' : 'Aguarde...'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
