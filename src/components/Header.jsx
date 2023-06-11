import React from 'react'
import logo from '../images/letter-n.png'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function () {
  return (
    <Container>
      <Logo className="logo">
        <img src={logo} alt="" />
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


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position:fixed;
  width:100%;
  top:0;

  nav{
    ul{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:2rem;
      font-size:1.2rem;

      a{
        text-decoration:none;
      }
    }
  }
`

const Logo = styled.div`
  width:25px;
  height:25px;

  img{
    width:100%;
  }
`