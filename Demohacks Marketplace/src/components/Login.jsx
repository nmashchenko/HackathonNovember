import { useState } from 'react'
import { supabase } from '../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  // navigate to logout if session is null
  useEffect(() => {
    if (!session) {
      navigate('/', { replace: true })
    }
  }, [session, navigate])

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
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
