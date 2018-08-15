import React from 'react'
import Layout from '../components/layout'

import styled, { keyframes } from 'react-emotion'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Hero = styled('div')`
  background: -webkit-linear-gradient(50deg, #1240a1 20%, #98cbe7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 2s ease-in;
`

const IndexPage = () => (
  <Layout>
    <Hero>
      <h1>Craig & Lisa</h1>
      <p className="text-center">13th July 2019</p>
    </Hero>
  </Layout>
)

export default IndexPage
