import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#FF802B',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: '500',
  fontSize: '26px',
  fontFamily: 'Montserrat',
  marginRight: theme.spacing(6),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}))

export default function CustomizedTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Available candies" />
          <StyledTab label="Your candies" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  )
}
