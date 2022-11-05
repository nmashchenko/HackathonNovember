// * Modules
import { useState, useEffect } from 'react'
import { supabase } from '../helpers/supabaseServer'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

function Platform({ session }) {
  const navigate = useNavigate()

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

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <>
      <h1>Platorm!!!</h1>
      <button onClick={logOut}>Logout</button>
    </>
  )
}

export default Platform
