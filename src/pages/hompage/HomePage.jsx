import React from 'react'
import {FaReact} from 'react-icons/fa'
import { Container, Animations } from "./homepageStyle";

export default function HomePage() {
  return (
    <Container>
      <div className="overlay">
        <h1>DEVELOPER</h1>
      </div>
      <div>
        <h1>
          <span>i'm a</span><br/>FULL STACK<br/>SOFTWARE<br/>DEVELOPER
        </h1>
      </div>

      <Animations className="animations">
        {/* <div className="react">
           <FaReact/>
        </div> */}
      </Animations>
      <div className="level">
        <span></span>
        <h1>01</h1>
        <span></span>
      </div>
    </Container>
  );
}

