import React from 'react'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const ProtectedRoute = ({ ...props }) => {
  const Auth = React.useContext(AuthContext)

  if (Auth.isLogged === false) {
    setTimeout(() => Auth.setError('Autenticação necessária!'), 0)
    return <Navigate to="/login" />
  } else if (Auth.isLogged === true) {
    return <Route {...props}></Route>
  }

  return null
}

export default ProtectedRoute
