import React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Head from '../components/Head'
import Header from '../components/Header'
import styles from './Home.module.css'

const Home = () => {
  const Auth = React.useContext(AuthContext)

  return (
    <>
      <Head title="Home" description="Página inicial do sistema" />
      <Header />
      <section className={styles.home}>
        <h1>HOME</h1>
      </section>
    </>

  )
}

export default Home
