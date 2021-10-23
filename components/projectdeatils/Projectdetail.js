import React, { useEffect } from 'react';
import {Container}from '../../src/layout/LayoutStyles';
import {Projectsdetail,ProjectImage,ProjectLinks,Languages,Language,Image,Text }from './ProjectdetailStyles';
import {Title}from'../../styles/GlobalComponents/index';
import {H1}from '../Projects-demonstration/ProjectsStyle';

function Projectdeatil({project}){
const color=["#526c69","#abb2aa","#fd532f"];

return(

   
<Projectsdetail project={project}  >

<Title primary TAL='center' JCC="center">{project.title}</Title>
<ProjectImage><Image src={project.image} alt={project.title}/></ProjectImage>
<ProjectLinks></ProjectLinks>
<H1 style={{margin:"1.5rem auto"}} JUC="center">USED TECHNOLOGIES :</H1>
<Languages >{ project.langtitle.map((pro,index)=>{return( <Language bkg={color[index%3]} key={index}>{pro}</Language>)})}</Languages>
<Text>{project.description}</Text>

</Projectsdetail>



);
}
export default Projectdeatil;