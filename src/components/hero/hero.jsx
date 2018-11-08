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
  display: flex;
  align-items: flex-start;
  animation: ${fadeIn} 1s ease-in;
  width: calc(100% + 3rem);
  height: 35rem;
  text-align: center;
  background-image: url(${pic});
  background-size: cover;
  background-position: 80%;
  position: relative;
  z-index: 0;
  color: white;
  margin-bottom: 3rem;
  padding: 4rem 1.5rem;
  justify-content: center;

  @media (min-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-bottom: 5rem;
    padding: 0 1.5rem;
    background-position: center;
  }

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
