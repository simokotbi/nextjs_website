import React from 'react';
import Link from 'next/link';
import { FaHome ,FaUserTie,FaProjectDiagram,FaTasks} from "react-icons/fa";
import {LOGOIMAGE} from './constants/Constants';
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
         <img src={`${LOGOIMAGE}`}/>
       </Logo>       
      </Div1>
       <motion.div
         initial={{y:200,x:100}}
         animate={{y:1,x:1}}
         transition={{ type: 'spring' }}
         >  <Div2>
     
      <li> 
          <Link href="#Home">
         <NavLink title="Home">
           <FaHome/>
           
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#About">
         <NavLink title="About me">
         <FaUserTie/>
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#Projects">
         <NavLink title="Projects">
         <FaTasks/>
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#Skills" >
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

