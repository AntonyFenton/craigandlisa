import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 2rem 0;

  a {
    font-family: 'Playfair Display', serif;
    text-decoration: none;
    margin-right: 3rem;
    color: #453e68;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const Header = () => (
  <Nav>
    <Link to="/">Our Story</Link>
    <Link to="/">Details</Link>
    <Link to="/">Menu</Link>
    <Link to="/">RSVP</Link>
  </Nav>
)

export default Header
