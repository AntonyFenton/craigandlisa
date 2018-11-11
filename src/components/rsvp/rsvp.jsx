// TO DO
// - Make a button for hotels
// - Make a separate page for Evening people - DONE
// - Add Food into CMS - DONE
// - Edit location image

import React from 'react'
import styled from 'styled-components'
import pattern from '../../images/leaf.png'
import pattern2 from '../../images/plantGroup.png'

const RsvpButton = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (min-width: 600px) {
    width: calc(100% - 8em);
  }

  a {
    display: inline-block;
    padding: 1.3em 2.8em;
    text-decoration: none;
    color: black;
    border: 2px solid #90aedb;
    position: relative;
    cursor: pointer;
    margin-bottom: 5rem;

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
      top: -20px;
      left: -10px;
      z-index: 100;
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
class RSVP extends React.Component {
  render() {
    return (
      <RsvpButton>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ1MM-8NVzGj9C3QV6QkmTTBQg_R2GqHToEagNibUHs-JKtg/viewform">
          RSVP to the big day!
        </a>
      </RsvpButton>
    )
  }
}

export default RSVP
