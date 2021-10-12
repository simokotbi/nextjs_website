import React from 'react';
import { Container } from '../../src/layout/LayoutStyles';
import {Img,Imgbtn,H1}from './ProjectsStyle';
import { Myprojects } from '../constants/Constants';

import {ContainerMr,Grid,Card,Title}from '../../styles/GlobalComponents/index';

const Projects=()=>{

   return ( 
        <Container id="Projects">
                <ContainerMr bkg="#fff">
           
        
           <Title color='#253741' ><img src="https://img.icons8.com/color/48/000000/blockly-pink.png"/>Projects</Title>  
                     <H1 style={{margin:"1.5rem 2rem"}} ><img src="https://img.icons8.com/color/48/000000/code.png"/>here some of my recent projects:</H1>
                      <Grid PAD="2rem .6rem">  
                             
            {Myprojects.map((myelement,id)=>{
                    return( 
                            <Card key={id} BGC={"white"}>
                            <Imgbtn>Reade more</Imgbtn>
                            <H1 JUC="center">{myelement.title}</H1>
            <Img key={id} src={myelement.image}/>
            
            </Card> );
            })}
           
            </Grid> 

            </ContainerMr>
        </Container>);
    
}
export default Projects;