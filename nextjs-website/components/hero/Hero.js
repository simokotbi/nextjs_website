import React from 'react';
import Link from 'next/link';
import { SectionTitle,SectionText,Div,Div2,Wrapper } from './HeroStyles';
import { Container } from '../../src/layout/LayoutStyles';
import Particles from 'react-particles-js';
import { motion } from "framer-motion";
import { images } from '../constants/Constants';
// const iumagesource=[];
// const ImageChange=()=>{
    
//     let length=images.length;
//     let random=Math.floor(Math.random*length);
//     setInterval(()=>{
//       iumagesource=images[random];
//     },800);
// }

function Hero(){
    return(
        <Container>
<Wrapper>
<Div> 
     <SectionTitle  >
         <motion.div  animate={{ rotate: 360 }}
    transition={{ duration: 2 }}>  Welcome To <br />
          Our Website</motion.div>
        </SectionTitle>
        <SectionText>
        Im kotbi Mohamed Im a Full stack developer with 5 years working experience.
  
        </SectionText>
</Div>
<Div2>

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
</Div2>
</Wrapper>
</Container>
    );
}
export default Hero;