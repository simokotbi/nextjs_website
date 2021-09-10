import styled from "styled-components";

export const ProjectsSection =styled.section`
background-image: url(${props => props.img});
height: 100vh;
background-attachment: fixed;
background-position: 0;
width:100%;
position: relative;
z-index: 1;
`;
export const Title=styled.h1`
font-family: ${props=>props.theme.fonts.secondary};
margin-top: 0;
text-align: center;
padding: 60px;
font-size: min(max(1.6rem, 4vw), 2rem);
line-height: 40px;
font-weight: 500;
letter-spacing: 0.025rem;
color: #fff;
z-index: 3;
/* opacity: 0.25; */
`;
export const Marker=styled.div`
position: absolute;
top: 70px;
left: 50%;

&::before {
content: '';
position: absolute;
z-index: 2;
transform: translateX(-50%);
background-color: #5da6ff;
width: 140px;
opacity: 0.35;
height: 20px;
border-radius: 8px;
-webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 15px  #5da6ff,
  0 0 15px  #5da6ff,
  0 0 35px  #5da6ff,
  0 0 45px  #5da6ff
  ;
}
`;