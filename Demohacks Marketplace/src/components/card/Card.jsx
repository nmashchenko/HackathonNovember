import { Button } from '@mui/material'
import { flexbox } from '@mui/system'
import { BLACK } from '../../constants/colors'
import { Card, Photo, Row, Snack, Price, Table, SpanText, ButtonItem } from './Card.styles'

function CardUse({ candy }) {
  return (
    <Card>
      <div>
        <Photo src="https://m.media-amazon.com/images/I/81NrXdOXZsL.jpg"></Photo>
      </div>
      <Table>
        <Row>
          <Snack>{candy.name}</Snack>
          <Price>
            {candy.price} <SpanText> CP</SpanText>
          </Price>
        </Row>
        <Row>
          <ButtonItem background="#2E2E2E">BUY</ButtonItem>
          <ButtonItem>OFFER</ButtonItem>
        </Row>
      </Table>
    </Card>
  )
}

export default CardUse
