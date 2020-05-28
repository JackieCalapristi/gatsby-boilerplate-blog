import React from 'react'
import { ThemeProvider } from "styled-components"

// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/globalStyles'

const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      layout component
      {children}

    </ThemeProvider>
  )
}

export default Layout;