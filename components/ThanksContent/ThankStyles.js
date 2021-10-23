import styled  from "styled-components";

export const Thankscontainer=styled.div`
    margin: 10rem auto;
    padding: 1rem;
    text-align: center;
    line-height: 1.2;
    background-color: ${props=>props.theme.colors.colorwhite}; 
`;
export const H2=styled.h2`
color:  ${props=>props.theme.colors.colorblack};
letter-spacing: 1px;
font-size: min(max(2rem, 4vw), 2rem);
`;
export const P=styled.p`
font-family: ${props=>props.theme.fonts.secondary} ;
font-size: min(max(16px, 4vw), 22px);

line-height: 40px;
font-weight: 600;
color:  ${props=>props.theme.colors.colorGris1};;
`;