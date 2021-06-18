import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing: border-box;
   outline: none;
 }

 body{
   background: #e1dfe6;
   color:#fff;
   --webkit-font-smoothing:antialiased;
 }
 
 body, input, button{
  font-family: 'Roboto Slab', serif;
  font-size:16px;
 }
`;
