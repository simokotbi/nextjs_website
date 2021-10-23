import styled from 'styled-components';

export const Container=styled.div`
    margin: 0 auto;
min-width: 380px;
@media only screen and (min-width:640px){
     margin-left: 20px; 
 
   }
`;

export const Circle=styled.div`
 position: fixed;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
z-index: 999;
`; 