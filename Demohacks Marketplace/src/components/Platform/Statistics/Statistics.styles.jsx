// * Modules
import styled from 'styled-components'

import { BLACK } from '../../../constants/colors'

export const PlatformContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${BLACK.background};
  display: flex;
`

export const PlatformContent = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Welcome = styled.span`
  font-weight: bold;
  color: #ff802b;
`

export const SpanText = styled.span`
  margin-left: 10px;
  margin-right: 5px;
  color: white;
  font-weight: bold;
`

export const FirstRow = styled.div`
  font-size: 32px;
  width: 100%;
  justify-content: center;
  display: flex;
`
export const SecondRow = styled.div`
  font-size: 28px;
  width: 100%;
  justify-content: flex-start;
  display: flex;
`
export const ThirdRow = styled.div`
  font-size: 28px;
  width: 90%;
  justify-content: center;
  display: flex;
  margin-left: 10px;
`
export const ForthRow = styled.div`
  font-size: 28px;
  width: 100%;
  justify-content: center;
  display: flex;
`
export const Photo = styled.img`
  padding: 10px;
  border-radius: 25px;
  max-width: 205px;
  height: 169px;
`
export const LastColumn = styled.div`
  font-size: 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  float: right;
`

export const RightProfile = styled.div`
  position: absolute;
  right: 15px;
`
