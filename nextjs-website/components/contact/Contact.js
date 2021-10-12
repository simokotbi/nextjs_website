import React, { useState } from "react";
import {Container}from '../../src/layout/LayoutStyles';
import {ContainerMr}from '../../styles/GlobalComponents/index';
import {Contactform,Form,Input,Textarea,ContformContainer,Button,Polindron}from './ContactStyles';
import router, { useRouter } from 'next/router';
import { useForm } from '@formcarry/react';
import axios from 'axios';

function Contact(){
 const router=useRouter();
const[name,SetName]=useState('');
const [email,SetEmail]=useState('');
const [message,SetMessage]=useState('');
// const [submited,SetSubmited]=useState(false);

const submit=e=>{

axios.post(
  "https://formcarry.com/s/RG6OrIgLOhk", 
  {name,email,message}, 
  {headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }}
).then((res)=>{
  console.log(res.status)
  if(res.status===200){
    console.log("success");
    router.push('/thanks/');
  }else{
    console.log(res.data.message);
  }
}).catch((error)=>{ console.log(error);})
e.preventDefault();
}

    return(
        <Polindron>
        <Container id="Contact">
        <ContainerMr bkg="#f5f5f5">
          <ContformContainer> <Contactform>
               
               <Form onSubmit={submit}>
               <Input type="text"  name="name" placeholder="Full Name" onChange={(e)=>{SetName(e.target.value)}} /> 
                <Input type="email"  name="email" placeholder="Email" onChange={(e)=>{SetEmail(e.target.value)}} />
                <Textarea type="text"  name="message" placeholder="Message" onChange={(e)=>{SetMessage(e.target.value)}} />
                <Button type="submit"  >SEND MESSAGE</Button>
                {/* onClick={()=>{SetSubmited(true)}} */}
               </Form>
              
           </Contactform> </ContformContainer>
        </ContainerMr>
        </Container></Polindron>
    );
}
export default Contact