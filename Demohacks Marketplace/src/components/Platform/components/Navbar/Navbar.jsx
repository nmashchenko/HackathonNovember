// * Modules
import { useState, useEffect } from 'react'

import { NavbarContainer, IconContainer } from './Navbar.styles'

import Home from '../../../../assets/Home'
import Analytics from '../../../../assets/Analytics'

function Navbar() {
  return (
    <NavbarContainer>
      <IconContainer>
        <Home />
      </IconContainer>
      <IconContainer>
        <Analytics />
      </IconContainer>
    </NavbarContainer>
  )
}

export default Navbar
