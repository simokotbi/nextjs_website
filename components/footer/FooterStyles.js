import styled from "styled-components";

export const Footersection=styled.footer`
        max-width: 1024px;
        width:100%auto;
    margin: 0 auto;
    padding: 0 1rem;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
`;
export const Footerwraper=styled.div`
padding: 2rem 0 4rem;
    min-height: 400px;
    
`;
export const FooterGrid=styled.div`
display: grid;
grid-template-columns:repeat(3,1fr);
grid-gap: 2rem;
@media ${props => props.theme.breakpoints.sm} {

    grid-template-columns:repeat(1,1fr);
}
`;
export const Linkslist=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const Listheader=styled.h4`
font-weight: 500;
color:#000;
margin-bottom: 1rem;
`;
export const Linkitem=styled.a`
color: #8c8c8c;
margin-top: .25rem;

font-family:${props=>props.theme.fonts.primary};
`;
export const SocialList=styled.div`
display: flex;

`;
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: #8c8c8c;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;
export const FooterEndtext=styled.p`
margin-top: 14rem;
color: #8c8c8c;
font-size: 0.7901234567901234em;
text-align: center;
`;