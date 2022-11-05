// * Modules

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// * Screens
import Login from './components/Login'

// * Constants

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
