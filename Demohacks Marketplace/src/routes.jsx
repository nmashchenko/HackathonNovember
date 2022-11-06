// * Modules

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// * Screens
import Login from './components/Login/Login'
import Platform from './components/Platform/Data/Platform'
import Statistics from './components/Platform/Statistics/Statistics'

// * Constants

export const useRoutes = (session) => {
  return (
    <Routes>
      <Route path="/login" element={<Login session={session} />} />
      <Route path="/platform" element={<Platform session={session} />} />
      <Route path="/statistics" element={<Statistics session={session} />} />
    </Routes>
  )
}
