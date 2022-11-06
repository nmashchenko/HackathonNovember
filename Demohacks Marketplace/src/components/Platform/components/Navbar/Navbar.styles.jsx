// * Modules
import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 98px;
  min-height: 100vh;
  background: #ff802b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`

export const IconContainer = styled.div`
  cursor: pointer;

  &:hover {
    transition: all 0.15s;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`
