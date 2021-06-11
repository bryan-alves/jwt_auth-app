import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';

import { AuthStorage } from './contexts/AuthContext'
import Home from './pages/Home';
import ProtectedRoute from './helpers/ProtectedRoute';


const App = () => {

  return (
    <BrowserRouter>
      <AuthStorage>
        <Routes>
          <Route path='/' element={<Login />} />
          <ProtectedRoute path='/home' element={<Home />} />
        </Routes>
      </AuthStorage>
    </BrowserRouter>
  );
}

export default App;
