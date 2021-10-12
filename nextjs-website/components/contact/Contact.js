import React, { useState } from "react";
import {Container}from '../../src/layout/LayoutStyles';
import {ContainerMr}from '../../styles/GlobalComponents/index';
import {Contactform,Form,Input,Textarea,ContformContainer,Button,Polindron}from './ContactStyles';
import router, { useRouter } from 'next/router';
import { useForm } from '@formcarry/react';

function Contact(){
const [submited,SetSubmited]=useState(false);
const {state, submit} = useForm({
  id: 'RG6OrIgLOhk'
})

if(state.submitted&&submited&&typeof window!=='undefined'){
  
  return <Contact></Contact>
  //  router=useRouter();
  //  router.push('/thanks/')
}

    return(
        <Polindron>
        <Container id="Contact">
        <ContainerMr bkg="#f5f5f5">
          <ContformContainer> <Contactform>
               
               <Form onSubmit={submit}>
               <Input type="text" id="name" name="name" placeholder="Full Name"  /> 
                <Input type="email" id="email" name="email" placeholder="Email" />
                <Textarea type="text" id="message" name="message" placeholder="Message"    />
                <Button type="submit" onClick={()=>{SetSubmited(true)}} >SEND MESSAGE</Button>
                {/* onClick={()=>{SetSubmited(true)}} */}
               </Form>
              
           </Contactform> </ContformContainer>
        </ContainerMr>
        </Container></Polindron>
    );
}
export default Contact