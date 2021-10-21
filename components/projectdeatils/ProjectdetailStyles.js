import styled from "styled-components";

export const Projectsdetail=styled.div`
   margin: 4rem auto;
   padding: 1rem ;
    text-align: center;
    line-height: 1.2;
    
    
   
`;


export const Image=styled.img`
    background-position: center;
    min-height: 320px;
    max-height: 600px;
    height: 100%;
    min-width: 320px;
    max-width: 600px;
    width: 100%;
    background-size: cover;
`;
export const ProjectImage=styled.div`
   margin: 2rem auto;
`;
export const ProjectLinks=styled.div`
background-color:orange;
`;

export const Languages=styled.div`
justify-content: center;
display: flex;
flex-wrap: wrap;
max-width: 500px;
    width: 100%;
    margin: 0 auto;
   
`;
export const Language=styled.p`
border-radius: 5px;
padding: 1rem ;
color: #fff;
margin: .5rem;
font-family:${props=>props.theme.fonts.secondary};
background-color: ${props=>props.bkg};
`;

export const Text=styled.h1`
font-family: ${props=>props.theme.fonts.secondary} ;
font-size: min(max(16px, 4vw), 22px);

line-height: 40px;
font-weight: 600;
color: #5a5a5e;
 margin: 0 15rem;
@media ${props => props.theme.breakpoints.xl}{
margin: 0 auto;

}
`;

