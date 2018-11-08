import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }

  a {
    font-family: 'Playfair Display', serif;
    text-decoration: none;
    color: #453e68;

    @media (min-width: 600px) {
      margin-right: 2rem;
    }

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
