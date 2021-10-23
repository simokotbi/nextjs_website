import styled from "styled-components";

export const ProjectsSection =styled.section`
background-image: url(${props => props.img});
background-attachment: fixed;
background-position: 0;
width:100%;
position: relative;

`;


export const H2=styled.h2`
color:#FFF;

padding:16px 0 0 16px;
text-align:initial;
`;
export const Text=styled.p`
color:#cecece;
padding:16px;
font-family :Inter, sans-serif;
text-align: initial;
line-height: 1.5;
letter-spacing: 1.8px;
`;
export const CarouselContainer=styled.ul`
  max-width: 1040px;
  /* background: #0F1624; */
  padding: 2rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }

`;
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`;

export const Carouselbutton=styled.div``;
export const CarouselText=styled.p`
font-size: 18px;
font-family: ${props=>props.theme.fonts.secondary} ;
line-height: 22px;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.75);
padding-right: 16px;
text-align: initial;
@media ${props => props.theme.breakpoints.md} {
  font-size: 16px;
  line-height: 18px;
  padding-right: 32px;
}
@media ${props => props.theme.breakpoints.sm} {
  font-size: 14px;
  line-height: 16px;
  padding-right: 0;
}`;
export const CarouselTitle=styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
  `;
export const CarouselItem=styled.div`
/* background: #0F1624; */
border-radius: 3px;
max-width: 196px;

@media ${props => props.theme.breakpoints.md} {
  max-width: 124px;
}

@media ${props => props.theme.breakpoints.sm} {
  margin-left: 32px;
  min-width: 120px;
  /* background: #0E131F; */
  padding: 4px;
  align-content: start;
  scroll-snap-align: start;
  border-radius: 3px;
  overflow: visible;
  position: relative;
  height: fit-content;
  
  ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
}
`;
export const Title=styled.h1`
display:flex;
align-items: center;
color:#fff;
font-family: ${props=>props.theme.fonts.secondary};
margin:0 0 0 26px;
text-align: ${props=>props.TAL};
justify-content: ${props=>props.JCC};
padding: 20px 20px 0 20px;
font-size: min(max(2.6rem, 4vw), 4rem);
line-height: 40px;
font-weight: 500;
letter-spacing: 0.025rem;
`;