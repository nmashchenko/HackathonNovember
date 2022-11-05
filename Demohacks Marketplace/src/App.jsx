// * Routes
import { useRoutes } from './routes'

// * Modules
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './helpers/supabaseServer'

function App() {
  const [session, setSession] = useState(null)
  const routes = useRoutes(session)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      <Router>{routes}</Router>
    </>
  )
}

export default App
