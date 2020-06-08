import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

const StyledLayout = styled.main`
  max-width: 57ch;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  overflow: ${({ scroll }) => (scroll ? 'scroll' : 'hidden')};
  overflow-x: hidden;
`

const Layout = ({ children, scroll }) => {
  return (
    <StyledLayout scroll={scroll}>
      <GlobalStyle />
      {children}
    </StyledLayout>
  )
}

export default Layout
