import React from 'react'
import storyImg1 from '../../images/one.png'
import storyImg2 from '../../images/craiglisa3.jpg'

import styled, { keyframes } from 'styled-components'

const StrotyItem = styled.section`
        visibility: hidden;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin-bottom: 3rem;

        h2 {
            grid-column: 2 / 5;
            grid-row: 1;
            font-weight: bold;
        }

        img {
            grid-column: 8 / 13;
            grid-row: 2 / 3;
        }

        p {
            grid-column: 2/ 7;
            grid-row: 2;
        }
     

    &:nth-of-type(2n) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        h2 {
            grid-column: 8 / 11;
            grid-row: 2;
            font-weight: bold;
        }

        img {
            grid-column: 2 / 7;
            grid-row: 1 / 3;
        }

        p {
            grid-column: 8/ 12;
            grid-row: 3;
        }
     }
  }
`

const Story = () => (
  <main>
    <StrotyItem>
      <h2>Lisa and Craig are sayin yes!</h2>
      <img src={storyImg1} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        consequatur provident! Consectetur quam iusto, fugiat praesentium qui
        ducimus corporis ut non sunt, blanditiis ipsum eligendi eos velit sit,
        veritatis doloremque. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, consequatur provident! Consectetur quam
        iusto, fugiat praesentium qui ducimus corporis ut non sunt, blanditiis
        ipsum eligendi eos velit sit, veritatis doloremque!
      </p>
    </StrotyItem>
    <StrotyItem>
      <h2>Lisa and Craig are sayin yes!</h2>
      <img src={storyImg2} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        consequatur provident! Consectetur quam iusto, fugiat praesentium qui
        ducimus corporis ut non sunt, blanditiis ipsum eligendi eos velit sit,
        veritatis doloremque. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, consequatur provident! Consectetur quam
        iusto, fugiat praesentium qui ducimus corporis ut non sunt, blanditiis
        ipsum eligendi eos velit sit, veritatis doloremque!
      </p>
    </StrotyItem>
  </main>
)
export default Story
