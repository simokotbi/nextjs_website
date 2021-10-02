import React from 'react';
import Link from 'next/link';
import { SectionTitle,SectionText } from './HeroStyles';
import {Btn,ContainerMr,ColRight,ColLeft,Wrapper}from '../../styles/GlobalComponents/index';
import { Container } from '../../src/layout/LayoutStyles';
import Particles from 'react-particles-js';
import { motion,useViewportScroll } from "framer-motion";
import { images } from '../constants/Constants';
import { useState } from 'react';
import { Background } from 'tsparticles/Options/Classes/Background/Background';


// export const CircleIndicator = () => {
//   const { scrollYProgress } = useViewportScroll()

//   return (
//     <motion.path
//       d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
//       style={{ pathLength: scrollYProgress }}
//     />
//   )
// }

function Hero(){
    const [current,setCount]=useState(0);
var myval;
   
    const length=images.length;
    const random=Math.floor(Math.random()*length);
  const ChangeIt=()=>{
    setCount(current==length-1 ? 0:current+1);
    if(myval)clearInterval(myval);
  }

  myval= setInterval(ChangeIt,4000);

  const { scrollYProgress } = useViewportScroll()
    return(
        <Container>
            <ContainerMr bkg="white">
<Wrapper>
<ColLeft> 
     <SectionTitle  >
         
     Hello <br />
          i'm kotbi Mohamed

        </SectionTitle>
        <SectionText>
        Im kotbi Mohamed Im a Full stack developer with 3 years working experience.
   
        </SectionText>
        <Btn MR="20px" white>Get in touch</Btn>
</ColLeft>
<ColRight style={{backgroundImage:`url(${images[current]})`,backgroundSize:'cover',transition: "all 1s ease-out"}}>

<Particles 
                
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        
                        "size": {
                            "value": 3
                        }
                    }, 
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                   
                    
                  
                }}
               
                 />
</ColRight>
</Wrapper>
</ContainerMr>
</Container>
    );
}
export default Hero;