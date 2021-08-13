
import styled from "styled-components";

export const GlobalHeader=styled.div`
position: fixed;
left: 0;
top: 0;
height: 100vh;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #2725;
`;
export const Div1=styled.div`
display :flex;
justify-content: center;
`;
export const Div2=styled.div`
display :flex;
justify-content: center;
flex-direction: column;
`;

export const Logo=styled.div`
color: blue;
cursor: pointer;
`;
export const NavLink=styled.a`
font-size: 2rem;
  line-height: 32px;
  font-family: ${props=>props.theme.fonts.secondary};
  cursor: pointer;
`;
// export const Container=styled.div`
// background-color:red;

// `;
