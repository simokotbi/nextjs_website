import styled from "styled-components";

export const Div=styled.div`
   padding: 170px 16px 70px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
   background:none;
   @media only screen and (min-width:640px){
     margin-left: 90px; 
    
   }
  
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


