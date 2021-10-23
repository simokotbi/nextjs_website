import styled from "styled-components";


export const SectionTitle=styled.h1`

font-family: ${props=>props.theme.fonts.secondary};
/* font-size: 2rem; */

font-size: min(max(2.6rem, 4vw), 3rem);
line-height: 40px;
font-weight: 600;
letter-spacing: 0.025rem;
color: ${props=>props.theme.colors.colorblack};

`;

export const SectionText=styled.h2`
font-family: ${props=>props.theme.fonts.secondary} ;
font-size: min(max(16px, 4vw), 22px);
line-height: 40px;
font-weight: 600;
color: ${props=>props.theme.colors.colorGris1};
`;

export const Image=styled.img`
  background-position: center;

height: 400px;
`;