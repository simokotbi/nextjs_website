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
padding:8px 16px ;
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
margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
   flex: 1 1 400px;
  
`;
export const ColRight=styled.div`
flex: 1 1 400px;
/* transform: skew(20deg); */
/* box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2); */
box-shadow: 0 3px 5px #ebebeb;
`;
export const Wrapper=styled.div`
display:  flex;
padding: 100px 16px 70px 26px;
align-items: center;
flex-wrap: wrap;
width: 100%;
height:100vh;
`;