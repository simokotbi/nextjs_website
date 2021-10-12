import React from "react";
import {Container}from '../../src/layout/LayoutStyles';
import Link from "next/dist/client/link";
import {Thankscontainer,H2,P}from './ThankStyles';
const Thanks= ()=>{
return(

        <Container>
       
         <Thankscontainer>
         <img src="https://img.icons8.com/color/96/000000/you-singular.png"/>
    <H2>Thank you!<br/>Your email has been sent successfully</H2>
    <P>I will get back to you as soon as possible!</P>
    <Link href="/"  ><a><img src="https://img.icons8.com/cute-clipart/64/000000/street-view.png"/> Go Back Home</a></Link>
    </Thankscontainer>
   
    </Container>
   
);
}
export default Thanks;