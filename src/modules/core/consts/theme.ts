'use client'

import { createTheme } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

//export const PRIMARY = '#3EB281'
export const PRIMARY = '#36976E'

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      light: '#5AC599',
      main: PRIMARY,
      dark: '#36976E',
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily
  }
})

export default theme