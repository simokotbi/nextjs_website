import styled from 'styled-components';

export const Container=styled.div`

/* max-width: 1280px; */
/* width:95%; *
    /* max-width: 1400px; */
    margin: 0 auto;
/* margin:0 0 0 40px; */
min-width: 380px;

@media only screen and (min-width:640px){
     margin-left: 20px; 
     /* 60px */
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