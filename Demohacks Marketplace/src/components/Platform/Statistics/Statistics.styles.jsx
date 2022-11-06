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
  width: calc(100% - 98px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '600'};
  font-size: ${(props) => props.fontSize || '30px'};
  color: ${(props) => props.color || '#FF802B'};
  margin: ${(props) => props.margin || '0'};
`

export const SpanText = styled.span`
  margin-left: 10px;
  margin-right: 5px;
  color: ${(props) => props.color || 'white'};
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
  width: 80%;
  display: flex;
  justify-content: flex-start;
  margin-left: 145px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

export const GraphContainer = styled.div`
  margin: 40px 0 0 0;
  width: 70%;
  display: flex;
`

export const InfoGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`
