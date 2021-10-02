import React from "react";
import {Container}from '../../src/layout/LayoutStyles';
import {ContainerMr}from '../../styles/GlobalComponents/index';
import {Contactform,Form,Input,Textarea,ContformContainer,Button}from './ContactStyles';
function Contact(){
    return(
        <Container>
        <ContainerMr bkg="#f5f5f5">
          <ContformContainer> <Contactform>
               
               <Form>
                 
               <Input type="text" name="name" placeholder="Full Name" />
        <Input type="email" name="email" placeholder="Email"/>
        <Textarea type="text" name="message" placeholder="Message"/>
       <Button>SEND MESSAGE</Button>
               </Form>
              
           </Contactform> </ContformContainer>
        </ContainerMr>
        </Container>
    );
}
export default Contact