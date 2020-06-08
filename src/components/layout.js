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

  .centered {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Gotham Black';
  }
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
