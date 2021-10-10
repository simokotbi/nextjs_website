import React from 'react';
import {ContainerMr,Grid,Card,Title,SmCardswrapper,SmCard}from '../../styles/GlobalComponents/index';
import { Container } from '../../src/layout/LayoutStyles';
import {JavaSvg}from '../animations/animation';
import {H1,LangImg} from './SkillsStyles';
import {Languages}from '../constants/Constants';
import {motion}from 'framer-motion'; 

function Skills(){
   
    return(
        <Container >
        <ContainerMr bkg="#fff">
        <Title color='#253741' TAL="initial"><img src="https://img.icons8.com/color/48/000000/blockly-blue.png"/>Skills</Title>  
                     <H1 style={{margin:"1.5rem 2rem"}}><img src="https://img.icons8.com/color/48/000000/source-code.png"/>I go to great lengths to polish my skills:</H1>
                      <Grid id="Skills" style={{justifyItems: "center"}} PAD=".4rem .4rem 6rem .4rem">
                          {Languages.map((item,id)=>{  
                              return(               
           <SmCardswrapper key={id}>
              <motion.div 
              whileHover={{scale:1.1}}
              >            
      <SmCard BGC="#2b2b30 "   >  <LangImg>{item.image}</LangImg>  
    {item.name}
      </SmCard>
      </motion.div>  
  </SmCardswrapper>) })}
                            </Grid>

   </ContainerMr></Container>
    );
}
export default Skills;