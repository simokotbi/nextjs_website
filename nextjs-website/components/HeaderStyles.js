
import styled from "styled-components";

export const GlobalHeader=styled.div`
position: fixed;
left: 0; 
top: 0;
height: 100vh;
padding: 10px;

display: flex;
flex-direction: column;
align-items: center;
background-color: #d1bdbe;


`;
export const Div1=styled.div`
flex: 1;
justify-self: flex-start;
`;
export const Div2=styled.div`
display :flex;
justify-content: center;
flex-direction: column;
justify-content: space-space-around;
flex:2;
`;

export const Logo=styled.div`
color: blue;
cursor: pointer;
`;
export const NavLink=styled.a`
font-size: 4rem;
  line-height: 32px;
  /* font-family: ${props=>props.theme.fonts.secondary}; */
  cursor: pointer;
`;
// export const Container=styled.div`
// background-color:red;

// `;
