import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Robot',sans-serif;    
 }

 body{
     background:${({ theme }) => theme.palette.primary.main};
 }

`;

export const Header = styled.p`
  padding: 30px;
  margin: 20px;
  font-size: 7vw;
  text-align: center;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 10vw;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  & > * {
    width: 100%;
  }
`;
