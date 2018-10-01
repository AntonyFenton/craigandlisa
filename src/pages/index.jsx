import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/header'
import Hero from '../components/hero/hero'
import Story from '../components/story/story'

import styled, { keyframes } from 'styled-components'

const PageLayout = styled.main`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <PageLayout>
      <Nav />
      <Hero />
      <Story />
    </PageLayout>
  </Layout>
)

export default IndexPage
