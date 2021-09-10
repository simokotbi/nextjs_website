import React from "react";
import { Container } from "../../src/layout/LayoutStyles";
import {ProjectsSection}from './ProjectsStyles';
import {bgi} from '../constants/Constants'; 
import {ContainerMr,Wrapper,ColLeft}from '../../styles/GlobalComponents/index';
import {Title,Marker}from './ProjectsStyles';
function Projects(){

    return(
        <Container>
<ContainerMr >
     <ProjectsSection img={bgi} >
        <Title>About me <Marker/></Title>
        <Wrapper>
<ColLeft><p>iodehjfusdhfsdjkfhskjhsjkdf</p> </ColLeft>
</Wrapper>
     </ProjectsSection> 
     </ContainerMr>
</Container>
    );
}
export default Projects;