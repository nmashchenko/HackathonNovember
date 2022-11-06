import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { supabase } from '../../../../helpers/supabaseServer'

import { Text, SpanText, Input, Button, CloseDiv } from './BuyModal.styles'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  borderRadius: '25px',
  boxShadow: 24,
  p: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function BuyModal({ open, handleClose }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0.0)
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { data, error } = await supabase.from('candies').insert([
      {
        user_id: user.id,
        description: description,
        photo: 'temp',
        price: price,
        issold: false,
        name: name,
      },
    ])

    handleClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <CloseDiv onClick={handleClose}>
              <CloseIcon sx={{ fontSize: '40px' }} />
            </CloseDiv>
            <Text>
              Candy <SpanText>Shop</SpanText>
            </Text>
            <Input placeholder="Name" onChange={(e) => setName(e.target.value)} required></Input>
            <Input
              placeholder="Price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              required
            ></Input>
            <Input
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></Input>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  )
}
