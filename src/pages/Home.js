import React from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Home = () => {
  const Auth = React.useContext(AuthContext)

  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default Home
