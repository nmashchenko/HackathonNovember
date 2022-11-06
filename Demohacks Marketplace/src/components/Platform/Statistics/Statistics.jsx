import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Navbar from '../components/Navbar/Navbar'

import {
  FirstRow,
  PlatformContainer,
  PlatformContent,
  Welcome,
  SpanText,
  RightProfile,
  SecondRow,
  ThirdRow,
  ForthRow,
  Photo,
  LastColumn,
} from './Statistics.styles'
import Profile from '../components/Profile/Profile'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [createData('11 August', 'KitKat', 'why', 'lox', 'WHY me')]

function Stats() {
  return (
    <PlatformContainer>
      <Navbar />
      <PlatformContent>
        <FirstRow>
          <Welcome>Welcome,</Welcome>
          <SpanText> ZXC</SpanText> <Welcome>!</Welcome>
          <RightProfile>{/* <Profile /> */}</RightProfile>
        </FirstRow>
        <SecondRow>
          <SpanText>Transaction History:</SpanText>
        </SecondRow>
        <ThirdRow>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Candy</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Seller</TableCell>
                  <TableCell>Protein</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThirdRow>
        <ForthRow>
          <Photo src="https://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1511859326/plot_6_jolcli.png"></Photo>
          <LastColumn>
            <Welcome>You spend: </Welcome>
            <Welcome>You earned: </Welcome>
            <Welcome>Current balance: </Welcome>
          </LastColumn>
        </ForthRow>
      </PlatformContent>
    </PlatformContainer>
  )
}

export default Stats
