import React from 'react';
import { Container } from '../../src/layout/LayoutStyles';
import {Img,Imgbtn,H1}from './ProjectsStyle';
import { Myprojects } from '../constants/Constants';
import {ContainerMr,Grid,Card,Title}from '../../styles/GlobalComponents/index';
import { useRef, useState } from 'react/cjs/react.development';
import { Router, useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/server/router';
const Projects=()=>{
    const route = useRouter();
   // const [state,SetId]=useState();
//  const  idref= useRef();
//      console.log(idref)
const handleprojectdeatils=(projectId)=>{
route.push('/'+projectId)
}
   return ( 
        <Container id="Projects">
                <ContainerMr bkg="#fff">
           
        
           <Title color='#253741' ><img src="https://img.icons8.com/color/48/000000/blockly-pink.png"/>Projects</Title>  
                     <H1 style={{margin:"1.5rem 2rem"}} ><img src="https://img.icons8.com/color/48/000000/code.png"/>here some of my recent projects:</H1>
                      <Grid PAD="2rem .6rem">  
                             
            {Myprojects.map((project,id)=>{
                    return( 
                            <Card key={id} BGC={"white"} >
                            <Imgbtn onClick={()=>{handleprojectdeatils(project.id)}} value={project.id}>Reade more</Imgbtn>
                            <H1 JUC="center">{project.title}</H1>
            <Img key={id} src={project.image}/>
            
            </Card> );
            })}
           
            </Grid> 

            </ContainerMr>
        </Container>);
    
}
export default Projects;