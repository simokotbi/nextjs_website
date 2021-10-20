import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Projectdeatil from '../../components/projectdeatils/Projectdetail';
import { Myprojects } from '../../components/constants/Constants';
import { useRouter } from 'next/dist/client/router';

function Projectdetails({mainproject}){
    //const router=useRouter();
    // const [project,SetDetails]=useState([]);
    // SetDetails(mainproject);
    const project=mainproject;
   return <Projectdeatil project={project} />
 }
//  const fetchDetails= async (projectId) => {
//     try{
// const mainproject=await  Myprojects.find(pro=>pro.id==projectId);
//   SetDetails(mainproject);
  

// }catch(err){console.log(err)}
// }
export async function getStaticPaths() {
    // Return a list of possible value for id
    const pagescustomids=[1,2,3];
    const paths = pagescustomids.map((project) => ({
        params: { projectId: project.toString() },
      })) 
    
      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
      return { paths, fallback: false }

  }
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    
   const projectId= params.projectId;
   console.log(`Building slug: ${params}`)
   const mainproject=  Myprojects.find(pro=>pro.id==projectId);
   
 
return{ props: { mainproject } }; 
  }
export default Projectdetails;