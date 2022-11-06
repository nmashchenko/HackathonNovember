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
import Card from '../../Card/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// * Assets
import banner from '../../../assets/bg2.jpg'

// * Components
import Tabs from '../components/Tabs/Tabs'
import BuyModal from '../components/BuyModal/BuyModal'
import Profile from '../components/Profile/Profile'
import PaymentModal from '../components/PaymentModal/PaymentModal'

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
  const [openPayment, setOpenPayment] = useState(false)

  const [candies, setCandies] = useState([])
  const [ownCandies, setOwnCandies] = useState([])
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(0)
  const [currentCandy, setCurrentCandy] = useState({})

  // navigate to logout if session is null
  useEffect(() => {
    if (!session) {
      navigate('/login', { replace: true })
    } else {
      const channel = supabase
        .channel('schema-db-changes')
        .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
          getUpdatedList()
        })
        .subscribe()
    }
  }, [session, navigate])

  useEffect(() => {
    const findAndAddUser = async () => {
      const userData = session.user.user_metadata

      await getUpdatedList()

      setIsLoading(true)

      let { data: users, error } = await supabase
        .from('users')
        .select('*')
        .match({ username: userData.preferred_username })

      console.log(users)
      setUser(users[0])

      setIsLoading(false)

      if (isEmpty(users)) {
        const { data, error } = await supabase
          .from('users')
          .insert([
            { username: userData.preferred_username, email: userData.email, candy_points: 0.0 },
          ])
      }
    }

    findAndAddUser()
  }, [])

  // Setup listener for supabase realtime API for updates to the service requests

  const handleOpen = () => {
    setOpen(true)
  }

  const handleOpenPayment = () => {
    setOpenPayment(true)
  }

  const handleClose = () => setOpen(false)

  const handleClosePayment = () => setOpenPayment(false)

  const getUpdatedList = async () => {
    const userData = session.user.id
    let { data: candies } = await supabase.from('candies').select('*').match({ issold: false })

    const filtered = candies.filter((candy) => candy.user_id !== userData)

    console.log(filtered)

    setCandies(filtered)
  }

  const handleChange = async (event, newValue) => {
    setValue(newValue)
    const userData = session.user.id

    if (newValue === 1) {
      let { data: candies, error } = await supabase
        .from('candies')
        .select('*')
        .match({ user_id: userData, issold: false })

      console.log(candies)

      if (!isEmpty(candies)) {
        setOwnCandies(candies)
      }
    }
  }

  // settings
  const settings = [
    { name: 'Sell Candy', function: handleOpen },
    { name: 'Trade CandyPoints', function: handleOpen },
    { name: 'Deliveries', function: handleOpen },
  ]

  return (
    <PlatformContainer>
      <BuyModal open={open} handleClose={handleClose} />
      <PaymentModal
        openPayment={openPayment}
        handleClosePayment={handleClosePayment}
        user={user}
        currentCandy={currentCandy}
        isLoading={isLoading}
      />

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
                console.log('Implement if have time!')
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
          <Profile handleOpen={handleOpen} user={user} isLoading={isLoading} />
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
          <Tabs handleChange={handleChange} value={value} />
        </SwitchContainer>
        <CardsContainer>
          {value === 0 ? (
            <Carousel responsive={responsive}>
              {candies.map((candy, i) => (
                <Card
                  candy={candy}
                  key={i}
                  handleOpenPayment={handleOpenPayment}
                  setCurrentCandy={setCurrentCandy}
                />
              ))}
            </Carousel>
          ) : (
            <Carousel responsive={responsive}>
              {ownCandies.map((candy, i) => (
                <Card
                  candy={candy}
                  key={i}
                  handleOpenPayment={handleOpenPayment}
                  setCurrentCandy={setCurrentCandy}
                />
              ))}
            </Carousel>
          )}
        </CardsContainer>
      </PlatformContent>
    </PlatformContainer>
  )
}

export default Platform
