import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../src/layout/LayoutStyles";
import {Particlesanimation}from "../animations/animation";
import {bgi,TimeLineData,resume} from '../constants/Constants'; 
import {ContainerMr,Grid,Card}from '../../styles/GlobalComponents/index';
import {Carouselbutton,ProjectsSection,CarouselText,CarouselTitle,Text,H2,CarouselContainer,CarouselMobileScrollNode,CarouselItem,Title}from './AboutmeStyles';
import Link from 'next/link';


function Aboutme(){
const carousselRef=useRef();
const CarouselData_length=TimeLineData.length;
const [activeItem,setActiveItem]=useState(0);

const scroll = (node, left) => {
   
    return node.scrollTo({ left, behavior: 'smooth' });
  }

const handleClick=(e,i)=>{
e.preventDefault();
if(activeItem.current){
    const scrollLeft = Math.floor(carousselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carousselRef.current, scrollLeft); 
}
}
const handleScroll=()=>{
if(activeItem.current){
    const index = Math.round((carousselRef.current.scrollLeft / (carousselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
setActiveItem(index);
}
}
useEffect(()=>{
 const handleResize=()=>{
    scroll(carousselRef.current,0);
}   
window.addEventListener('resize', handleResize);

},[]);


    return(
        <Container id="About">
<ContainerMr >

     <ProjectsSection img={bgi} >
   <Particlesanimation/>
        <Title  TAL="initial"><img src="https://img.icons8.com/color/48/000000/blockly-green.png"/>About me </Title>
        
     <Grid>
         <Card BGC='transparent' MR=".5rem 5vw" >
{/* <Titlesection>Kotbi mohamed</Titlesection> */}

<H2 >Im <span style={{color:"#498AED"}}>kotbi Mohamed </span> Im a Full stack developer with 3 years working experience.</H2>
<Text>Now that you know who I am, let me tell you more. I am a passionate person who loves to work on new projects every time. Hence, I have worked on different types of projects, for example, web apps in Spring Boot, Android apps using Android Studio, and simple competitive programming algorithms. To know more about my skills and projects, please scroll down.</Text>
  {/* <SmCardswrapper>
      <SmCard BGC="#2b2b30" >hallllowjsjkjsdf</SmCard>
      
  </SmCardswrapper> */}
<Text> <img src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-resume-project-management-itim2101-flat-itim2101-1.png"/>
<a target="_blank" href={resume} >Download Resume</a></Text>
<CarouselContainer ref={carousselRef} onScroll={handleScroll}>
<>
{TimeLineData.map((item,index)=>(
<CarouselMobileScrollNode key={index} final={index===CarouselData_length-1}>
    <CarouselItem
     id={`carousel__item-${index}`} active={activeItem} index={index} 
    onClick={(e)=>handleClick(e,index)}>
<CarouselTitle>  {`${item.year}`}</CarouselTitle>
<CarouselText>  {`${item.text}`}</CarouselText>
<Carouselbutton></Carouselbutton>
</CarouselItem>

</CarouselMobileScrollNode>
))}</>
</CarouselContainer>


   </Card>
</Grid>
     </ProjectsSection> 
     </ContainerMr>
</Container>
    );
}
export default Aboutme;