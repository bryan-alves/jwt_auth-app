import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthStorage = ({ children }) => {

  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();


  async function login(email, password) {

    try {
      const { data: token } = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      })

      window.localStorage.setItem('token', token.access_token)

      const { data: me } = await axios.post('http://localhost:8000/api/login/me', {}, {
        headers: {
          'Authorization': `Bearer ${token.access_token}`
        }
      });

      setUser(me)
      navigate('/home');
    } catch (err) {
      const { data } = err.response
      setError(data.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      user, setUser, error, setError, loading, setLoading, login
    }}>
      {children}
    </AuthContext.Provider>
  )
}
