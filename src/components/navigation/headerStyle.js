import styled from "styled-components";

export const Container = styled.div `
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
      font-size:.9rem;

      a{
        font-family: 'Poppins', sans-serif;
        text-decoration:none;
         color: #eee;
         text-transform: uppercase;
         font-weight: 200;
      }
    }
  }
`

export const Logo = styled.div `
  color: #fff;
  font-size:1.3rem;
  font-family: 'Satisfy', cursive;
`