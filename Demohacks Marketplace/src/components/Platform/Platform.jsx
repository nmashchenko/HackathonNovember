// * Modules
import { useState, useEffect } from 'react'
import { supabase } from '../../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Navbar from './components/Navbar/Navbar'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// * Assets
import banner from '../../assets/bg2.jpg'

// * Components
import Tabs from './components/Tabs/Tabs'

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
} from './Platform.styles'

// settings
const settings = ['Add CandyPoints', 'Sell CandyPoints', 'Wiew Candies']

function Platform({ session }) {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = useState(null)

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

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <PlatformContainer>
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
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon sx={{ fontSize: '52px', color: 'white' }} />
            </IconButton>
            <Menu
              sx={{ mt: '55px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Name" disabled>
                <Text fontWeight="bold">Nikita Mashchenko</Text>
              </MenuItem>
              <MenuItem key="Balance" disabled>
                <Text fontWeight="bold">
                  Balance: <SpanText>24 CP</SpanText>
                </Text>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Text>{setting}</Text>
                </MenuItem>
              ))}
              <MenuItem key="Logout" onClick={handleLogOut}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
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
      </PlatformContent>
    </PlatformContainer>
  )
}

export default Platform
