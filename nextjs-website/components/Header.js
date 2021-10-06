import React from 'react';
import Link from 'next/link';
import { FaHome ,FaUserTie,FaProjectDiagram,FaTasks} from "react-icons/fa";

import {GlobalHeader,Div1,Div2,Logo,NavLink} from './HeaderStyles';
import styled from "styled-components";
import { Container } from '../src/layout/LayoutStyles';
import {motion} from 'framer-motion';
function Header(){ 
     return(
  <Container>
   <GlobalHeader> 
      <Div1>
       
          <Logo>
         <img src="https://img.icons8.com/color/48/000000/under-computer.png"/>
       </Logo>       
      </Div1>
       <motion.div
         initial={{y:200,x:100}}
         animate={{y:1,x:1}}
         transition={{ type: 'spring' }}
         >  <Div2>
     
      <li> 
          <Link href="#">
         <NavLink title="Home">
           <FaHome/>
           
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#">
         <NavLink title="About me">
         <FaUserTie/>
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#">
         <NavLink title="Projects">
         <FaTasks/>
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#" >
         <NavLink title="Skills">
         <FaProjectDiagram/>
        </NavLink>      
        </Link> 
        </li>
      </Div2></motion.div>
   </GlobalHeader>

</Container>
);
}
export default Header;

