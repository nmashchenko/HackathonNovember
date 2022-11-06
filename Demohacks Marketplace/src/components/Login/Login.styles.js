// * Modules
import styled from 'styled-components'
import { BLACK } from '../../constants/colors'

export const TextWrapper = styled.div`
  width: 45%;
`

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.p`
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.color || '#FF802B'};
`

export const SpanText = styled.span`
  color: white;
  font-weight: bold;
`

// Create a Wrapper component that'll render a <section> tag with some styles
export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${BLACK.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LinksWrapper = styled.div`
  display: flex;
  gap: 40px;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 100px 0 100px 0;
`

export const LoginIcon = styled.div`
  cursor: pointer;
  width: 92px;
  height: 92px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.15s;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`
