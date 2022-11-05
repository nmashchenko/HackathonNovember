import { useState } from 'react'
import { supabase } from '../../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './Login.styles.css'

function Login() {
  // const navigate = useNavigate()
  // navigate to logout if session is null
  // useEffect(() => {
  //   if (!session) {
  //     navigate('/', { replace: true })
  //   }
  // }, [session, navigate])

  const handleGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  return (
    <>
      <div className="outside">
        <h1>
          Welcome to our trading application, for your security we only allow to login via your
          <h2>google/linkedIn/github</h2> account:
        </h1>
        <button onClick={handleGitHub}>GitHub</button>
      </div>
    </>
  )
}

export default Login
