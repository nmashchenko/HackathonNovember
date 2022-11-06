import { useState, useEffect } from 'react'
import { supabase } from '../../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'
import {
  AppWrapper,
  TextWrapper,
  LinksWrapper,
  LoginIcon,
  Title,
  SpanText,
} from './Login.styles.js'

import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Login({ session }) {
  const navigate = useNavigate()

  // navigate to logout if session is null
  useEffect(() => {
    if (session) {
      navigate('/platform', { replace: true })
    }
  }, [session, navigate])

  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:8080/platform',
      },
    })
  }

  return (
    <>
      <AppWrapper>
        <TextWrapper>
          <Title>
            Welcome to our trading application, for your security we only allow to login via your
            <SpanText> google / linkedIn / github</SpanText> account:
          </Title>
        </TextWrapper>
        <LinksWrapper>
          <LoginIcon onClick={handleGithubLogin}>
            <GitHubIcon sx={{ fontSize: '82px' }} />
          </LoginIcon>
          {/* TODO: CHANGE THIS LATER! */}
          <LoginIcon onClick={handleGithubLogin}>
            <GoogleIcon sx={{ fontSize: '82px' }} />
          </LoginIcon>
          <LoginIcon onClick={handleGithubLogin}>
            <LinkedInIcon sx={{ fontSize: '82px' }} />
          </LoginIcon>
        </LinksWrapper>
        <TextWrapper>
          <Title>
            Our candies are waiting for
            <SpanText> you!</SpanText>
          </Title>
        </TextWrapper>
      </AppWrapper>
    </>
  )
}

export default Login
