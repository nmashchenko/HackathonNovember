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
`

export const TopContainer = styled.div`
  width: calc(100% - 98px);
  margin: 50px 0 0 40px;
  display: flex;
  justify-content: space-between;
`

export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '300'};
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => props.color || 'black'};
  margin: ${(props) => props.margin || '0'};
`

export const SpanText = styled.span`
  color: #ff802b;
  font-weight: bold;
`

export const PosterContainer = styled.div`
  width: 93%;
  height: 160px;
  margin: 50px 0 0 40px;
  position: relative;
`

export const BgImage = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const TextOnTopContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const SwitchContainer = styled.div`
  width: calc(100% - 98px);
  margin: 50px 0 0 40px;
`

export const CardsContainer = styled.div`
  margin-left: 110px;
`
