import React from 'react'

import styled, { keyframes } from 'styled-components'

import pic from '../../images/craiglisa100.jpg'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const HeroBanner = styled.section`
  width: 100%;
  height: 30rem;

  animation: ${fadeIn} 1s ease-in;
  text-align: left;
  background-image: url(${pic});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  color: white;
  margin-bottom: 3rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(227, 78, 78, 0.16);
    z-index: -1;
  }

  div {
    grid-column: 2 / span 7;
  }
`

const Hero = () => (
  <HeroBanner>
    <div>
      <h1>
        Craig <small>and</small> Lisa <br />
        <small>are getting married</small>
      </h1>
      <p>Saturday 13th July 2019</p>
    </div>
  </HeroBanner>
)

export default Hero
