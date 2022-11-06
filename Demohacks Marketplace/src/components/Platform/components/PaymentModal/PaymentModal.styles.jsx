// * Modules
import styled from 'styled-components'

export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '600'};
  font-size: ${(props) => props.fontSize || '30px'};
  color: ${(props) => props.color || 'black'};
  margin: ${(props) => props.margin || '0'};
  text-align: center;
`

export const SpanText = styled.span`
  color: #ff802b;
  font-weight: bold;
`

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: #ff802b;
  width: 284px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  &:focus {
    border-color: black;
  }

  &::placeholder {
    font-weight: bold;
    opacity: 0.4;
    color: black;
    line-height: 10px;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  margin-top: 45px;
  width: 166px;
  height: 50px;

  background: #2e2e2e;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transition: all 0.15s;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`

export const CandyImage = styled.img`
  width: 250px;
  height: 240px;
  border-radius: 10px;
`
