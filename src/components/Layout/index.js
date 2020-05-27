import React from 'react'
import { ThemeProvider } from "styled-components"
// Styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/globalStyles'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      layout component
      {children}

    </ThemeProvider>
  )
}

export default Layout;