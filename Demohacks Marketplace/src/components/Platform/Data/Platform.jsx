// * Modules
import { useState, useEffect } from 'react'
import { supabase } from '../../../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Navbar from '../components/Navbar/Navbar'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Card from '../../Card/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// * Assets
import banner from '../../../assets/bg2.jpg'

// * Components
import Tabs from '../components/Tabs/Tabs'
import BuyModal from '../components/BuyModal/BuyModal'
import Profile from '../components/Profile/Profile'

// * Styles
import {
  PlatformContainer,
  PlatformContent,
  TopContainer,
  Text,
  SpanText,
  PosterContainer,
  BgImage,
  TextOnTopContainer,
  SwitchContainer,
  CardsContainer,
} from './Platform.styles'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
}

function Platform({ session }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  // navigate to logout if session is null
  useEffect(() => {
    if (!session) {
      navigate('/login', { replace: true })
    }
  }, [session, navigate])

  useEffect(() => {
    const findAndAddUser = async () => {
      const userData = session.user.user_metadata
      console.log(userData)

      let { data: users, error } = await supabase
        .from('users')
        .select('username')
        .match({ username: userData.preferred_username })

      if (isEmpty(users)) {
        console.log('hello world')
        const { data, error } = await supabase
          .from('users')
          .insert([
            { username: userData.preferred_username, email: userData.email, candy_points: 0.0 },
          ])
      }
    }

    findAndAddUser()
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  // settings
  const settings = [
    { name: 'Sell Candy', function: handleOpen },
    { name: 'Trade CandyPoints', function: handleOpen },
    { name: 'Deliveries', function: handleOpen },
  ]

  return (
    <PlatformContainer>
      <BuyModal open={open} handleClose={handleClose} />
      <Navbar />
      <PlatformContent>
        <TopContainer>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 550 }}
          >
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={() => {
                console.log('хуй')
              }}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Try "Snickers"'
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
          <Profile handleOpen={handleOpen} />
        </TopContainer>
        <PosterContainer>
          <BgImage src={banner}></BgImage>
          <TextOnTopContainer>
            <Text fontSize="45px" color="white" fontWeight="500">
              Happy Halloween!
            </Text>
          </TextOnTopContainer>
        </PosterContainer>
        <SwitchContainer>
          <Tabs />
        </SwitchContainer>
        <CardsContainer>
          <Carousel responsive={responsive}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </CardsContainer>
      </PlatformContent>
    </PlatformContainer>
  )
}

export default Platform
