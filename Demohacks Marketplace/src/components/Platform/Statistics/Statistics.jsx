import Table from '../components/Table/Table'
import Navbar from '../components/Navbar/Navbar'
import Graph from '../components/Graph/Graph'
import { useState, useEffect } from 'react'
import { supabase } from '../../../helpers/supabaseServer'

import {
  FirstRow,
  PlatformContainer,
  PlatformContent,
  Text,
  SpanText,
  SecondRow,
  ThirdRow,
  GraphContainer,
  InfoGroup,
} from './Statistics.styles'
import Profile from '../components/Profile/Profile'

function Stats({ session }) {
  const [time, setTime] = useState('')
  const [amount, setAmount] = useState(0)
  const [item, setItem] = useState('')

  let spending = 0 - amount

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      /* Getting the current user from the database. */
      let { data: curUser } = await supabase
        .from('users')
        .select('*')
        .match({ username: user.user_metadata.user_name })

      let gotUser = curUser[0]

      let { data: purchaseInfo } = await supabase
        .from('payments')
        .select('*')
        .match({ customer_id: gotUser.id })

      let date = new Date(purchaseInfo[0].created_at)
      let dateFormat = date.getHours() + ':' + date.getMinutes() + ', ' + date.toDateString()

      setTime(dateFormat)
      setAmount(purchaseInfo[0].price)

      let { data: itemInfo } = await supabase
        .from('candies')
        .select('*')
        .match({ id: purchaseInfo[0].item_id })

      setItem(itemInfo[0].name)
    }

    fetchData()
  }, [])

  return (
    <PlatformContainer>
      <Navbar />
      <PlatformContent>
        <FirstRow>
          <Text margin="75px 0 0 0">
            Welcome, <SpanText> Nikita</SpanText>!
          </Text>
        </FirstRow>
        <SecondRow>
          <Text color="white" fontWeight="300" fontSize="23px" margin="20px 0 10px 0">
            Transaction History:
          </Text>
        </SecondRow>
        <ThirdRow>
          <Table time={time} amount={amount} item={item} />
        </ThirdRow>
        <GraphContainer>
          <Graph time={time} amount={amount} item={item} />
          <InfoGroup>
            <Text>
              Your spending: <SpanText>{amount} CP</SpanText>
            </Text>
            <Text>
              Your earnings: <SpanText>0 CP</SpanText>
            </Text>
            <Text>
              Total difference:<SpanText color="#E15656">{spending} CP</SpanText>
            </Text>
            <Text>
              Financial score: <SpanText color="#E15656">Negative</SpanText>
            </Text>
          </InfoGroup>
        </GraphContainer>
      </PlatformContent>
    </PlatformContainer>
  )
}

export default Stats
