import React from 'react'
import Waypoint from 'react-waypoint'
import styled, { keyframes } from 'styled-components'
import branch from '../../images/branch2.png'

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

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
  text-align: center;
  border: 2px dotted #90aedb;

  h2 {
    margin-top: -1.5rem;
    padding: 0 7rem;
    background: white;
    position: relative;

    @media (min-width: 600px) {
      padding: 0 11rem;
    }

    &:before {
      content: '';
      background-image: url(${branch});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      width: 100px;
      height: 100px;
      position: absolute;
      top: -30px;
      right: -10px;
      z-index: 100;
    }
    &:after {
      content: '';
      background-image: url(${branch});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      width: 100px;
      height: 100px;
      position: absolute;
      top: -30px;
      left: -10px;
      z-index: 100;
      transform: scaleX(-1);
    }
  }

  ul {
    padding: 0;
    margin: 2rem 0;
    list-style: none;

    li {
      margin-bottom: 2rem;
    }

    span {
      position: relative;

      &:before,
      &:after {
        content: '';
        position: absolute;
        ${
          '' /* width: 50px;
        height: 1px;
        border-bottom: 1px dotted #f26a0a; */
        }
        top: 0;
        bottom: 0;
        margin: auto;
      }

      &:before {
        left: -68px;
      }

      &:after {
        right: -68px;
      }
    }
  }

  @media (min-width: 600px) {
    width: calc(100% - 8em);
    margin: 0 4em 5rem 4em;
    padding: 0 4em;
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
    &.fadeIn {
        animation: 3s ${slideIn} forwards;
      }
  }
  }
`

class Menu extends React.Component {
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
    const foodOptions = this.props.food.edges.map(option =>
      option.node.data.foodoptions.map(item => (
        <li key={item.option.text}>{item.option.text}</li>
      ))
    )
    return (
      <Waypoint onEnter={this.onEnter} topOffset="100px">
        <MenuSection
          id="food"
          name="food"
          className={this.state.isAnimated ? 'fadeIn' : ''}
        >
          <h2>Food</h2>
          <ul>{foodOptions}</ul>
        </MenuSection>
      </Waypoint>
    )
  }
}

export default Menu
