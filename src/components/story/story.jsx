import React from 'react'
import styled, { keyframes } from 'styled-components'

const StrotyItem = styled.section`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin-bottom: 3rem;

        h2 {
            grid-column: 2 / 5;
            grid-row: 1;
            font-weight: bold;
        }

        img {
            grid-column: 8 / 12;
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
            grid-column: 7 / 10;
            grid-row: 1;
            font-weight: bold;
        }

        img {
            grid-column:  2/ 6;
            grid-row: 1 / 3;
            transform:translateY(100px)
        }

        p {
            grid-column: 7/ 12;
            grid-row: 2;
        }
     }
  }
`

class Story extends React.Component {
  render() {
    const articles = this.props.content.edges.map(data => (
      <StrotyItem key={data.node.id}>
        <h2>{data.node.data.storytitle.text}</h2>
        <p>{data.node.data.storycontent.text}</p>
        <img src={data.node.data.storyimage.url} />
      </StrotyItem>
    ))
    return <div>{articles}</div>
  }
}

export default Story
