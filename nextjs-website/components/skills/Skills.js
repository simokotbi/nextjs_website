import React from 'react';
import {ContainerMr,Grid,Card,Title,SmCardswrapper,SmCard}from '../../styles/GlobalComponents/index';
import { Container } from '../../src/layout/LayoutStyles';
import {JavaSvg}from '../animations/animation';
import {H1} from './SkillsStyles';
import {Languages}from '../constants/Constants';

function Skills(){
   
    return(
        <Container>
        <ContainerMr bkg="#fff">
        <Title color='#253741' TAL="initial"><img src="https://img.icons8.com/color/48/000000/blockly-blue.png"/>Skills</Title>  
                     <H1 style={{margin:"1.5rem 2rem"}}><img src="https://img.icons8.com/color/48/000000/source-code.png"/>here some of my recent projects:</H1>
                      <Grid style={{justifyItems: "center"}}>
                          {Languages.map((item,id)=>{  
                              return(               
           <SmCardswrapper key={id}>
                            
      <SmCard BGC="#2b2b30" >  <>{item.image}</>  
    {item.name}
      </SmCard>
      
  </SmCardswrapper>) })}
                            </Grid>

   </ContainerMr></Container>
    );
}
export default Skills;