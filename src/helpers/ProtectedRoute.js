import React from 'react'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const ProtectedRoute = ({ ...props }) => {
  const Auth = React.useContext(AuthContext)

  if (Auth.user === null) {
    Auth.setError('ERror')
    return <Navigate to="/  " />
  }

  return (
    <Route {...props}></Route>
  )
}

export default ProtectedRoute
