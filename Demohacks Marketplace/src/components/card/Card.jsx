import { Button } from '@mui/material'
import { flexbox } from '@mui/system'
import { BLACK } from '../../constants/colors'
import { Card, Photo, Row, Snack, Price, Table, SpanText, ButtonItem } from './Card.styles'

function CardUse() {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card>
        <div>
          <Photo src="https://m.media-amazon.com/images/I/81NrXdOXZsL.jpg"></Photo>
        </div>
        <Table>
          <Row>
            <Snack>Snickers:</Snack>
            <Price>
              250 <SpanText> CP</SpanText>
            </Price>
          </Row>
          <Row>
            <ButtonItem background="#2E2E2E">Buy</ButtonItem>
            <ButtonItem>Offer</ButtonItem>
          </Row>
        </Table>
      </Card>
    </div>
  )
}

export default CardUse
