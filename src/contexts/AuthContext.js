import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthStorage = ({ children }) => {

  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(null);

  const navigate = useNavigate();

  async function login(email, password) {
    setLoading(true)
    try {
      const { data: token } = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      })
      window.localStorage.setItem('token', token.access_token)
      await getUser(token.access_token)
      navigate('/');
    } catch (err) {
      console.log()
      const catchError = err.response === undefined ? 'Error interno do servidor' : err.response.data.error
      setError(catchError)
    } finally {
      setLoading(false)
    }
  }

  const logout = React.useCallback(function () {
    setUser(null)
    setError(null)
    setLoading(null)
    setIsLogged(null)

    async function invalidateToken() {
      const token = window.localStorage.getItem('token')

      await axios.post('http://localhost:8000/api/login/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    }

    invalidateToken()

    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate])

  const getUser = React.useCallback(async function (token) {
    try {
      const { data: me } = await axios.post('http://localhost:8000/api/login/me', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setUser(me)
      setIsLogged(true)
    } catch (err) {
      const catchError = err.response === undefined ? 'Error interno do servidor' : err.response.data.error
      logout()
      console.log(catchError)
    }
  }, [logout])

  React.useEffect(() => {

    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        await getUser(token)
      } else {
        setIsLogged(false)
      }
    }

    autoLogin()
  }, [getUser, navigate])

  return (
    <AuthContext.Provider value={{
      user, error, setError, loading, login, isLogged, logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
