import React from "react";
import {Container}from '../../src/layout/LayoutStyles';
import {ContainerMr}from '../../styles/GlobalComponents/index';
import {Contactform,Form,Input,Textarea,ContformContainer,Button,Polindron}from './ContactStyles';
import { useState } from 'react';

function Contact(){
let name=
const contactme=async event=>{
event.preventDefault();
const res=await fetch(
'',{
    body: JSON.stringify({
        name: event.target.name.value,
        email:event.target.email.value,
        message:event.target.message.value
      }),
      method: 'POST',
     headers:{ 'Content-Type': 'application/json'}
}


)
}


    return(
        <Polindron>
        <Container>
        <ContainerMr bkg="#f5f5f5">
          <ContformContainer> <Contactform>
               
               <Form>

               <Input type="text" name="name" placeholder="Full Name" />
        <Input type="email" name="email" placeholder="Email"/>
        <Textarea type="text" name="message" placeholder="Message"/>
       <Button type="submit">SEND MESSAGE</Button>
               </Form>
              
           </Contactform> </ContformContainer>
        </ContainerMr>
        </Container></Polindron>
    );
}
export default Contact