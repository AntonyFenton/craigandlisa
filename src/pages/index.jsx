import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/header'
import Hero from '../components/hero/hero'
import Story from '../components/story/story'
import Location from '../components/locaion/location'
import styled from 'styled-components'
import Menu from '../components/menu/menu'
import RSVP from '../components/rsvp/rsvp'
import { graphql } from 'gatsby'

const PageLayout = styled.main`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageLayout>
          <Nav />
          <Hero />
          <Story content={this.props.data.allPrismicStory} />
          <Location />
          <Menu food={this.props.data.allPrismicFoodMenu} />
          <RSVP />
        </PageLayout>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query AboutQuery {
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
    allPrismicFoodMenu {
      edges {
        node {
          id
          data {
            foodoptions {
              option {
                text
              }
            }
          }
        }
      }
    }
  }
`
