import { useState, useEffect } from 'react'
import { supabase } from '../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'

function Login({ session }) {
  const navigate = useNavigate()

  // navigate to logout if session is null
  useEffect(() => {
    if (session) {
      navigate('/platform', { replace: true })
    }
  }, [session, navigate])

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:8080/platform',
      },
    })
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>login</button>
    </>
  )
}

export default Login
