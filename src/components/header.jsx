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
    <Link to="/#story">Our Story</Link>
    <Link to="/#details">Location</Link>
    <Link to="/#food">Food</Link>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ1MM-8NVzGj9C3QV6QkmTTBQg_R2GqHToEagNibUHs-JKtg/viewform">
      RSVP
    </a>
  </Nav>
)

export default Header
