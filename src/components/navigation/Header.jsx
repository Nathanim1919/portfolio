import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Logo } from './headerStyle';

export default function () {
  return (
    <Container>
      <Logo className="logo">
        <p>Nathanim</p>
      </Logo>

     <nav>
        <ul>
            <NavLink>about</NavLink>
            <NavLink>work</NavLink>
        </ul>
     </nav>
    </Container>
  );
}

