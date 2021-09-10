import React from 'react';
import Link from 'next/link';
import { AiFillAlipaySquare } from "react-icons/ai";
import { DiAndroid,DiEclipse } from "react-icons/di";
import {GlobalHeader,Div1,Div2,Logo,NavLink} from './HeaderStyles';
import styled from "styled-components";
import { Container } from '../src/layout/LayoutStyles';

function Header(){ 
     return(
  <Container>
   <GlobalHeader> 
      <Div1>
         <Logo><img src="https://cdn.logo.com/hotlink-ok/logo-social.png" rel=""/>
       
         </Logo>
       
      </Div1>
      <Div2>
      <li> 
          <Link href="#">
         <NavLink>
           <AiFillAlipaySquare/>
           
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#">
         <NavLink>
         <DiAndroid/>
        </NavLink>      
        </Link> 
        </li>
        <li> 
          <Link href="#">
         <NavLink>
         <DiEclipse/>
        </NavLink>      
        </Link> 
        </li>
      </Div2>
   </GlobalHeader>

</Container>
);
}
export default Header;

