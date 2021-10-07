import React from "react";
import {Container}from '../../src/layout/LayoutStyles';
import {ContainerMr}from '../../styles/GlobalComponents/index';
import {Contactform,Form,Input,Textarea,ContformContainer,Button,Polindron}from './ContactStyles';
import { useState } from 'react';

function Contact(){
const [name,SetName]=useState('');
const [email,SetEmail]=useState('');
const [message,SetMessage]=useState('');
const [submited,SetSubmited]=useState(false);
const contactme=async event=>{
  try{
event.preventDefault();
console.log('sending...');
let res=await fetch(
'api/contact',{ method: 'POST',
     headers:{'Accept': 'application/json, text/plain, */*', 
       'Content-Type': 'application/json'},
    body: JSON.stringify({
        name,
        email,
        message
      })    
}
); if(res.status===200){
  console.log('status submited');
  SetSubmited(true);
  SetName('');
  SetEmail('');
  SetMessage('');

}}catch(err){console.log(err)}
}


    return(
        <Polindron>
        <Container>
        <ContainerMr bkg="#f5f5f5">
          <ContformContainer> <Contactform>
               
               <Form>

               <Input type="text" name="name" placeholder="Full Name" onChange={(e)=>{SetName(e.target.value)}} />
        <Input type="email" name="email" placeholder="Email" onChange={(e)=>{SetEmail(e.target.value)}}/>
        <Textarea type="text" name="message" placeholder="Message" onChange={(e)=>{SetMessage(e.target.value)}}/>
       <Button type="submit" onClick={(e)=>{contactme(e)}}>SEND MESSAGE</Button>
               </Form>
              
           </Contactform> </ContformContainer>
        </ContainerMr>
        </Container></Polindron>
    );
}
export default Contact