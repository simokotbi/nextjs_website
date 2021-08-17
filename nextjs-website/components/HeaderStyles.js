
import styled from "styled-components";

export const GlobalHeader=styled.div`
position: fixed;
left: 0; 
bottom: 0;
top: 0;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
justify-content:space-between;
@media ${(props)=>props.theme.breakpoints.sm}{
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 325px;
    padding-right: 10px;
    padding-left: 10px;
    position: fixed;
    left: 0;
    right: 0;
    top: 90vh;
    width: 100%;
    height: ${props=>props.theme.size.leftgutterdesktopwidth};

}
`;
export const Div1=styled.div`
 /* flex: 1; */
justify-self: flex-start;
`;
export const Div2=styled.div`
display :flex;
justify-content: center;
flex-direction: column; 
justify-content: flex-end;
justify-content: space-space-around;
/* flex:2; */
@media ${(props)=>props.theme.breakpoints.sm}{
  flex-direction: row;
  
}
`;

export const Logo=styled.div`
img{
  max-height: 57px;
max-width: 57px;
height: 100%;
width: 100%;
border-radius: 50px;
};
cursor: pointer;
@media ${(props)=>props.theme.breakpoints.sm}{
  position: fixed;
  top: 32px;
  left: 16px;
}
`;
export const NavLink=styled.a`
  cursor: pointer;
  border-radius: 30px;
  padding: 0 1.6rem;
  background-color: #fff;
  margin: 5px 10px;
  text-align: center;
  display: flex;
    align-items: center;
    color: #2b2b30;
    border:1px solid ${props=>props.theme.colors.colorgrey80};
    font-size: 1.6rem;
    height: 44px;
  
  
`;

