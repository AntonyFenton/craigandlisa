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

    @media(min-width: 600px) {
      flex-direction: row;

        &:last-of-type {
         margin-bottom: 5rem;
        }

      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        justify-content: space-between;
     }

    }

     div {
         position: relative;
         margin-bottom: 1rem;
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


     .imgClump {
       position: relative;
        div{
          content: '';
          position: absolute;
          width: 30%;
          height: 30%;
          background: red;
        }
     }
  }
`

const Container = styled.article`
  @media (min-width: 600px) {
    position: relative;
    margin: 0 4rem 10rem 4rem;
  }
`

const Title = styled.h3`
  color: #8faddd7a;
  font-size: 4rem;
  left: -5px;
  position: relative;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 6rem;
    position: absolute;
    top: -80px;
    left: -5px;
  }
`

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.onEnter = this.onEnter.bind(this)
    this.state = {
      isAnimated: false,
      scrolledTo: false,
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
          <div id="story" name="story">
            <h2>{data.node.data.storytitle.text}</h2>
            <p>{data.node.data.storycontent.text}</p>
          </div>
          <div className="imgClump">
            <img src={data.node.data.storyimage.url} />
          </div>
        </StrotyItem>
      </Waypoint>
    ))
    return (
      <Container>
        <Title>Our Story</Title>
        {stories}
      </Container>
    )
  }
}

export default Story
