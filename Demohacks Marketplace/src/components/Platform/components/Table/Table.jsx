import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState, useEffect } from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(date, item, amount, delivered) {
  return { date, item, amount, delivered }
}

// const rows = [createData('11/05/2022', 'Snickers', 10, 'In Progress')]

export default function CustomizedTables({ time, item, amount }) {
  const row = createData(time, item, amount, 'Scheduled')

  return (
    <div style={{ background: 'white' }}>
      <Table sx={{ width: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Time</StyledTableCell>
            <StyledTableCell align="right">Item</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Delivery</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
          <StyledTableRow key={row.name}>
            <StyledTableCell align="left">{row.date}</StyledTableCell>
            <StyledTableCell align="right">{row.item}</StyledTableCell>
            <StyledTableCell align="right">{row.amount}$</StyledTableCell>
            <StyledTableCell align="right">{row.delivered}</StyledTableCell>
          </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </div>
  )
}
