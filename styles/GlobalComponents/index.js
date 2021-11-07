import styled from "styled-components";


export const Btn =styled.button`
color: ${props=>props.theme.colors.colorBlue2};
background-color: ${props=>props.theme.colors.colorblack};
border: 1px solid ${props=>props.theme.colors.colorBorder};
padding:8px 20px ;
font-size: 1.4rem;
cursor: pointer;
height: fit-content;
color: ${props => props.primary ?props.theme.colors.colorwhite:props.theme.colors.colorblack };
margin-top: ${props=>props.MR};
`;
export const ContainerMr=styled.div`

background: ${props=>props.bgprimary?props.theme.colors.colorcntSilver:props.theme.colors.colorwhite};
@media only screen and (min-width:640px){
     margin-left: 60px;

   }

`;
export const ColLeft=styled.div`
margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
   flex: 1 1 400px;

`;
export const ColRight=styled.div`
flex: 1 1 400px;
height: fit-content;
box-shadow: 0 3px 5px ${props=>props.theme.colors.colorBorder2};
`;
export const Wrapper=styled.div`
display:  flex;
padding: 150px 16px 150px 26px;
align-items: center;
flex-wrap: wrap;
width: 100%;

`;

export const Grid=styled.section`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(310px,1fr));
text-align: center;
grid-gap: 2rem;
padding:${props=>props.PAD} ;
`;
export const Card=styled.div`
  box-shadow: 3px 4px 9px rgba(80, 78, 78, 0.5);
 
  position: relative;
  /* background-color: ${props=>props.theme.colors.colorwhitecard}; */
 margin: ${props=>props.MR};

`;
export const Title=styled.h1`
display:flex;
align-items: center;

font-family: ${props=>props.theme.fonts.secondary};
margin:0 0 0 26px;
text-align: ${props=>props.TAL};
justify-content: ${props=>props.JCC};
padding: 20px 20px 0 20px;
font-size: min(max(2.6rem, 4vw), 4rem);
line-height: 40px;
font-weight: 500;
letter-spacing: 0.025rem;

color:${props=>props.primary?props.theme.colors.colorTitle:props.theme.colors.colorwhite};

`;
export const SmCardswrapper =styled(Grid)`
grid-template-columns: repeat(auto-fit,minmax(4,1fr));
margin: 0 auto;
`;
export const SmCard=styled(Card)`
display:flex;
align-items: center;
justify-content:center;
padding: 1rem 3rem;
margin:.5rem 0 0 0;
border-radius:6px;
background-color:${props=>props.theme.colors.colorSmcard};
color:${props=>props.theme.colors.colorwhite};
font-size: min(max(1.6rem, 4vw), 1.6rem);
font-family: ${props=>props.theme.fonts.secondary};
`;