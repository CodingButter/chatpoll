import styled, { createGlobalStyle } from "styled-components";
import Roboto from "./resources/fonts/Roboto/Roboto-Black.ttf";

export const GlobalStyles = createGlobalStyle`
 @font-face {
     font-family:'Roboto';
     src:local('Roboto'),
     url(${Roboto}) format('ttf');
     font-weight:300;
     font-style:normal;
 }

 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Robot';    
 }

 body{
     background:${({ theme }) => theme.palette.primary.main};
 }

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  & > * {
    width: 100%;
  }
`;
