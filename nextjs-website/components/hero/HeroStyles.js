import styled from "styled-components";

export const Div=styled.div`
margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
   background:none;
   flex: 1 1 400px;
 
   /* @media only screen and (min-width:640px){
     margin-left: 90px; 
    
   } */
  
`;
export const Div2=styled.div`
background-color: black;
flex: 1 1 400px;
transform: skew(20deg);
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`;
export const Wrapper=styled.div`
display:  flex;
padding: 100px 16px 70px 16px;
align-items: center;
flex-wrap: wrap;
width: 100%;
`;
export const SectionTitle=styled.h1`

font-family: ${props=>props.theme.fonts.secondary};
/* font-size: 2rem; */
font-size: min(max(18px, 4vw), 34px);
line-height: 40px;
font-weight: 600;
letter-spacing: 0.025rem;
color: #000;
`;

export const SectionText=styled.h2`
font-family: ${props=>props.theme.fonts.secondary} ;
font-size: min(max(16px, 4vw), 22px);
/* font-size: clamp(16px, 4vw, 22px); */
line-height: 40px;
font-weight: 600;
color: #5a5a5e;
`;


