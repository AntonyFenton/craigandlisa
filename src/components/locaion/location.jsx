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

const Details = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  div {
    text-align: center;
    margin-bottom: 5rem;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    div {
      width: 25%;
    }

    img {
      width: 65%;
    }
  }

  .mapButton {
    display: inline-block;
    padding: 1em 2em;
    border-radius: 6px;
    text-decoration: none;
    color: white;
    background: linear-gradient(-70deg, #658dcc, #2d1182 130%);
  }

  &.fadeIn {
    animation: 3s ${slideIn} forwards;
  }
`

class Location extends React.Component {
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
    return (
      <Waypoint onEnter={this.onEnter}>
        <Details className={this.state.isAnimated ? 'fadeIn' : ''}>
          <div>
            <h3>Keston Village Hall</h3>
            <p>132 Heathfield Rd, Bromley</p>
            <p>Keston, BR2 6BF</p>
            <a className="mapButton" href="/">
              View on Map
            </a>
          </div>
          <img src="https://www.kestonvillagehall.org.uk/wp-content/uploads/2014/03/Gemma-Chris02.jpg" />
        </Details>
      </Waypoint>
    )
  }
}

export default Location
