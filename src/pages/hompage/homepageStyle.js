import styled from 'styled-components'

export const Container = styled.div `
  background: linear-gradient(to right, #fff);
  display: flex;
  justify-content: center;
  align-items: start;
  height: 75vh;
  padding: 4rem;
  overflow: hidden;

  .overlay{
    position: absolute;
    top: 10%;
    
    > h1{
        opacity: .1;
        font-size: 13rem;

    }
  }

  h1 {
    font-size: 5rem;
    color: #fff;
    line-height: 70px;
    position: relative;
    z-index: 4;
    font-family: 'Gasoek One', sans-serif;
    font-weight: 100;
    text-shadow:0 20px 10px rgba(0,0,0,.4);
    max-height: 100vh;
    font-weight: 100;

    > span {
      font-size: 2rem;
      color: #a09c9c;
     font-family: 'Satisfy', cursive;
    }
  }

  .level{
    position: absolute;
    bottom: 0rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    opacity: .071;
    
    h1{
        font-family: 'Poppins';
        font-size: 15rem;
        
    }

    span{
        height: 3px;
        flex: 1;
        background-color: #eee;
    }
  }
`;

export const Animations = styled.div `
position: absolute;
  display: grid;
  width: 100%;
  background-color: red;
  flex: 0;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  top: 38%;
  left: 65%;

  >div{
    width: 180px;
    font-size: 7rem;
    color: #fff;
    height: 180px;
    border-radius: 50%;
    background-color: #434;
    display: grid;
    place-items: center;
    position: absolute;
   background: rgb(2, 0, 36);
   background: linear-gradient(90 deg, rgba(2, 0, 36, 1) 0% , rgba(13, 6, 51, 1) 21% , rgba(54, 53, 65, 1) 100% );

  }
`