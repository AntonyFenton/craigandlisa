import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/header'
import Hero from '../components/hero/hero'
import Story from '../components/story/story'
import Location from '../components/locaion/location'
import styled from 'styled-components'
import RSVP from '../components/rsvp/rsvp'
import { graphql } from 'gatsby'

const PageLayout = styled.main`
  width: 100%;
  overflow: hidden;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SecondPage = ({ data }) => (
  <Layout>
    <PageLayout>
      <Nav />
      <Hero />
      <Story content={data.allPrismicStory} />
      <Location />
      <RSVP />
    </PageLayout>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query EveningPageQuery {
    allPrismicStory {
      edges {
        node {
          id
          data {
            storytitle {
              text
            }
            storyimage {
              url
            }
            storycontent {
              text
            }
          }
        }
      }
    }
  }
`
