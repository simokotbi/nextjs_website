import styled from "styled-components";

export const HR=styled.hr`
border: none;
border-bottom: 2px dashed #000;
/* #dbe1e8 */
/* margin: 2rem 0; */
`;

export const Btn =styled.button`
color: #629CF1;
background-color: #000;
border: 1px solid #cececc;
padding:12px 26px ;
font-size: 1.6rem;
cursor: pointer;
height: fit-content;
color: ${props => props.primary ? "black" :"white"};
margin-top: ${props=>props.MR};
`;
export const ContainerMr=styled.div`

background: ${props=>props.bkg};
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

box-shadow: 0 3px 5px #ebebeb;

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
  /* box-shadow:0 4px 8px rgba(0,30,84,0.12); */
  position: relative;
  background-color: ${props=>props.BGC};
 margin: ${props=>props.MR};

`;
export const Title=styled.h1`
display:flex;
align-items: center;
font-family: ${props=>props.theme.fonts.secondary};
margin:0 0 0 26px;
text-align: ${props=>props.TAL};
padding: 20px 20px 0 20px;
font-size: min(max(2.6rem, 4vw), 4rem);
line-height: 40px;
font-weight: 500;
letter-spacing: 0.025rem;
color:${props=>props.color};
/* background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent; */

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
color:#fff;
font-size: min(max(1.6rem, 4vw), 1.6rem);
font-family: ${props=>props.theme.fonts.secondary};
`;