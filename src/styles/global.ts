import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
 margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  color:${(props)=>props.theme.colors.text};
  background: ${(props)=>props.theme.colors.background};
}


  a{
    text-decoration: none;
    color: #000;
  }
  button{
    cursor: pointer;
  }

`;
