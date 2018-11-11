import React from 'react'
import Waypoint from 'react-waypoint'
import styled, { keyframes } from 'styled-components'
import pattern from '../../images/leaf.png'
import pattern2 from '../../images/plantGroup.png'
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
  margin-bottom: 7rem;
  width: 100%;
  position: relative;

  div {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 600px) {
    width: calc(100% - 8em);
    margin: 0 4em rem 4em;
    flex-direction: row;

    div {
      width: 25%;
      margin-bottom: 5rem;
    }

    img {
      width: 65%;
    }

    &.fadeIn {
      animation: 3s ${slideIn} forwards;
    }
  }

  .mapbutton {
    display: inline-block;
    margin: 1em 0 5em 0;
    padding: 1.3em 2.8em;
    text-decoration: none;
    color: black;
    border: 2px solid #90aedb;
    position: relative;
    cursor: pointer;

    &:hover {
      border: 2px solid #acbfdb;

      &:before,
      &:after {
        opacity: 0.6;
      }
    }

    &:before {
      content: '';
      background-image: url(${pattern});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      width: 50px;
      height: 50px;
      position: absolute;
      bottom: -20px;
      left: -20px;
      z-index: 100;
      transform: rotate(-110deg);
    }

    &:after {
      content: '';
      background-image: url(${pattern2});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      width: 80px;
      height: 80px;
      position: absolute;
      bottom: -30px;
      right: -28px;
      z-index: 100;
    }
  }
`

const Title = styled.h3`
  color: #8faddd7a;
  font-size: 4rem;
  left: -5px;
  position: relative;

  @media (min-width: 600px) {
    font-size: 6rem;
    position: absolute;
    top: -80px;
    left: -5px;
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
      this.setState({ isAnimated: true })
    }
  }

  render() {
    return (
      <Waypoint onEnter={this.onEnter} topOffset="100px">
        <Details className={this.state.isAnimated ? 'fadeIn' : ''}>
          <div id="details">
            <Title>Location</Title>
            <p>
              <small>Ceremony 14:30</small>
            </p>
            <h3>Keston Village Hall</h3>
            <p>132 Heathfield Rd, Bromley</p>
            <p>Keston, BR2 6BF</p>
            <a className="mapbutton" href="https://goo.gl/maps/mcUJiXV4w2F2">
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
