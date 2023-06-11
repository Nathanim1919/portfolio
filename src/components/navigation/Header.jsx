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
            <NavLink to={'/'}>work</NavLink>
            <NavLink to={'/'}>about</NavLink>
        </ul>
     </nav>
    </Container>
  );
}

