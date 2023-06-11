import React from 'react'
import styled from 'styled-components'

export default function HomePage() {
  return (
    <Container>
      <div>
        <h1>
          <span>Nathanim Tadele,</span> full stack software engineer
          <br />{" "}
          <span>
            building scalable web apps
            <br /> with multiple languages and frameworks.
          </span>
        </h1>
      </div>
    </Container>
  );
}


const Container = styled.div`
    margin-top:5rem;
    display:grid;
    place-items:center;

    h1{
        font-size:2rem;

        >span{
            font-size:1.4rem;
        }
    }
`