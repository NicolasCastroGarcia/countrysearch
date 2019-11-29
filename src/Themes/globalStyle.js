import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${props => props.theme.bgColor};;
    color: white;
    height: 100%;
    padding: 0;
    margin:0;

  }
  html{
    height: 100%;  
  }
  #root {
    height: 100%;
  }
  *:focus{
    outline: none;
}


`;

export default GlobalStyle;
