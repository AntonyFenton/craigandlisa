import React from 'react'
import Waypoint from 'react-waypoint'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    opacity: 0.1;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`

const slideUp = keyframes`
  from {
    opacity: 0.1;
    transform: translateY(5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`

const StrotyItem = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;

    @media(min-width: 600px) {
      margin: 0 4em 10em 4em;
      flex-direction: row;

      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        justify-content: space-between;
     }

    }
    
     &:last-of-type {
         margin-bottom: 9em;
     }

     div {
         position: relative;
     }

     svg {
         position: absolute;
        bottom: -4em;
        left: 0;
        right: 0;
        margin: auto;
     }

     @media (min-width: 600px) {
        > * {
          width: 45%;
        }
     }

      &.fadeIn {
        h2, p {
            animation: 3s ${slideIn} forwards;
        }

      img {
        animation-delay: 0.2s;
        animation: 2s ${slideUp} forwards;
      }
     }
  }
`

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.onEnter = this.onEnter.bind(this)
    this.state = {
      isAnimated: false,
    }
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isAnimated: true,
      })
    }
  }

  render() {
    const stories = this.props.content.edges.map(data => (
      <Waypoint onEnter={this.onEnter} key={data.node.id}>
        <StrotyItem className={this.state.isAnimated ? 'fadeIn' : ''}>
          <div>
            <h2>{data.node.data.storytitle.text}</h2>
            <p>{data.node.data.storycontent.text}</p>
          </div>
          <img src={data.node.data.storyimage.url} />
        </StrotyItem>
      </Waypoint>
    ))
    return <article>{stories}</article>
  }
}

export default Story

export const query = graphql`
  query StoryQuery {
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
