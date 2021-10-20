import React, { useEffect } from 'react';
import {Container}from '../../src/layout/LayoutStyles';
import {Projectsdetail,IMG,ProjectdConatiner,ProjectTitle,ProjectImage,ProjectLinks,Languages,Language,ProjectDescription}from './ProjectdetailStyles';
import { SectionTitle,SectionText,Image } from '../hero/HeroStyles';
function Projectdeatil({project}){

return(
 <Container>
   
<Projectsdetail project={project}  >
<ProjectdConatiner>
<SectionTitle>{project.title}</SectionTitle>
<ProjectImage><Image src={project.image} alt={project.title}/></ProjectImage>
<ProjectLinks></ProjectLinks>
<Languages ><Language>{project.langtitle}</Language></Languages>
<SectionText>{project.description}</SectionText>
</ProjectdConatiner>
</Projectsdetail>

<p>project details</p>

 </Container>
);
}
export default Projectdeatil;