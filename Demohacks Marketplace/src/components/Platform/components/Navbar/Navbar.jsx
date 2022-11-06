// * Modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { NavbarContainer, IconContainer } from './Navbar.styles'

import Home from '../../../../assets/Home'
import Analytics from '../../../../assets/Analytics'

function Navbar() {
  const navigate = useNavigate()

  return (
    <NavbarContainer>
      <IconContainer onClick={() => navigate('/platform')}>
        <Home />
      </IconContainer>
      <IconContainer onClick={() => navigate('/statistics')}>
        <Analytics />
      </IconContainer>
    </NavbarContainer>
  )
}

export default Navbar
