import React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Head from '../components/Head'

const Home = () => {
  const Auth = React.useContext(AuthContext)

  return (
    <div>

      <Head title="Home" description="Página inicial do sistema"/>
      <h1>HOME</h1>
      <button onClick={() => Auth.logout()}>Sair</button>
    </div>
  )
}

export default Home
