import styled from "styled-components";

export const Pagesgrid=styled.section`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-gap: 16px;
margin-bottom: 8rem;
padding: 0 1rem;
text-align: center;

`;
export const Card=styled.div`
/* border-radius: 10px; */
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  position: relative;
  background-color: #fff;
`;
export const Img=styled.img`
    background-position: center;
    background-size: cover;
    max-width: 600px;
    max-height: 600px;
    width: 100%;
    height: 60%;
    place-self: center;
    /* border: 1.2rem solid #fff; */
    box-shadow:0 4px 8px rgba(0,30,84,0.12);
   
`;
export const Imgbtn=styled.button`
color: #629CF1;
background-color: white;
border: 1px solid #cececc;
padding: 8px ;
cursor: pointer;
height: fit-content;
position: absolute;
top: 90%;
left:35%;
/* transform: rotate(90deg);  */
text-align: center;
z-index: 10;
font-size: 16px;

`;
export const H1=styled.h1`
color: #000;
text-transform: uppercase;
`;