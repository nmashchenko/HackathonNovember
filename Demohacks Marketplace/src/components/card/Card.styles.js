import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 232px;
  height: 303px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Snack = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`
export const Price = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: Row;
  justify-content: right;
  align-items: center;
`
export const Photo = styled.img`
  padding: 10px;
  border-radius: 25px;
  max-width: 205px;
  height: 169px;
`
export const Table = styled.div`
  font-size: 120%;
  font-weight: bold;
  width: 85%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`
export const ButtonItem = styled.button`
  font-weight: bold;
  font-size: 18px;
  width: 89px;
  height: 37px;
  color: #ff802b;
  border: 2px solid BLACK;
  border-radius: 10px;
  background: ${(props) => props.background || 'none'};
`
export const SpanText = styled.span`
  padding: 5px;
  color: #ff802b;
`
