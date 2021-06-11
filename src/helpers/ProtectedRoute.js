import React from 'react'
import { Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const ProtectedRoute = ({ ...props }) => {
  const Auth = React.useContext(AuthContext)
  const navigate = useNavigate()

  React.useEffect(() => {

    if (!Auth.isLogged()) {
      Auth.setError('Autenticação necessária!')
      return navigate('/')
    }
  }, [Auth, navigate])

  if (!Auth.isLogged())
    return null

  return (
    <Route {...props}></Route>
  )
}

export default ProtectedRoute
