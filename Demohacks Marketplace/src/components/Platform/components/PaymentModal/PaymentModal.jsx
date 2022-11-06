import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { supabase } from '../../../../helpers/supabaseServer'

import { Text, SpanText, CandyImage, Button, CloseDiv } from './PaymentModal.styles.jsx'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: '25px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function PaymentModal({
  openPayment,
  handleClosePayment,
  user,
  currentCandy,
  isLoading,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('candies')
      .update({ issold: true })
      .eq('id', currentCandy.id)

    const { data: payments, error: error1 } = await supabase.from('payments').insert([
      {
        customer_id: user.id,
        seller_id: currentCandy.user_id,
        item_id: currentCandy.id,
        price: currentCandy.price,
      },
    ])

    let newPoints = user.candy_points - currentCandy.price
    const { data: money, error: error2 } = await supabase
      .from('users')
      .update({ candy_points: newPoints })
      .eq('id', user.id)

    window.location.reload(false)
  }

  return (
    <div>
      <Modal
        open={openPayment}
        onClose={handleClosePayment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <CloseDiv onClick={handleClosePayment}>
              <CloseIcon sx={{ fontSize: '40px' }} />
            </CloseDiv>
            <div>
              <CandyImage src="https://m.media-amazon.com/images/I/91BUrf--A3L.jpg"></CandyImage>
            </div>
            {isLoading ? (
              <Text margin="30px 0 0 0">
                Price: <SpanText> loading... </SpanText>
              </Text>
            ) : (
              <Text margin="30px 0 0 0">
                Price: {currentCandy.price}
                <SpanText> CP </SpanText>
              </Text>
            )}
            {!isLoading && user.candy_points > currentCandy.price ? (
              <>
                <Text fontWeight="300" fontSize="23px" margin="30px 0 0 0" color="#35C729">
                  You have enough balance for this purchase!
                </Text>
                <Button type="submit" onClick={handleSubmit}>
                  Purchase
                </Button>
              </>
            ) : (
              <>
                <Text fontWeight="300" fontSize="23px" margin="30px 0 0 0" color="red">
                  Not enough balance for this purchase!
                </Text>
                <Button type="button" onClick={() => {}}>
                  Disabled
                </Button>
              </>
            )}
          </Box>
        </form>
      </Modal>
    </div>
  )
}
