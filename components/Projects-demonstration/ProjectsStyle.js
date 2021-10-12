import styled from "styled-components";


export const Img=styled.img`
    background-position: center;
    background-size: cover;
    max-width: 700px;
    max-height: 600px;
    width: 100%;
    height: 70%;
    place-self: center;
    /* border: 1.2rem solid #fff; */
    box-shadow:0 4px 8px rgba(0,30,84,0.12);
   
`;
export const Imgbtn=styled.button`
padding: .5rem 1.4rem;;
cursor: pointer;
height: fit-content;
position: absolute;
top: 90%;
left:27%;
text-align: center;
z-index: 10;
font-size: 16px;
background: rgb(249, 249, 249);
    color: rgb(0, 195, 255);
    box-shadow: rgb(185 185 185) 0px 13px 19px -6px;
  border: none;
    border-radius: 0.3rem;
   
`;
export const H1=styled.h1`
display: flex;
align-items: center;
color: #000;
text-transform: uppercase;
letter-spacing: 1.5px;
justify-content: ${props=>props.JUC};
font-size: min(max(2rem, 4vw), 1rem);
`;