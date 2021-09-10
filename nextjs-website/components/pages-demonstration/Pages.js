import React from 'react';
import Link from 'next/link';
import { Container } from '../../src/layout/LayoutStyles';
import {Pagesgrid,Img,Imgbtn,Card,H1}from './PagesStyle';
import { OurServices } from '../constants/Constants';
import img from '../../public/images/1.jpg';
import { element } from 'prop-types';
import { HR } from '../../styles/GlobalComponents';
import {ContainerMr}from '../../styles/GlobalComponents/index';

const Pages=()=>{

   return ( 
        <Container>
                <ContainerMr bkg="#eee">
            <HR/>
        
           <h1>Videos</h1>  
                      <Pagesgrid >  
                             
            {OurServices.map((myelement,id)=>{
                    return( 
                            <Card key={id}>
                            <Imgbtn>Reade more</Imgbtn>
                            <H1>{myelement.title}</H1>
            <Img key={id} src={myelement.image}/>
            
            </Card> );
            })}
           
            </Pagesgrid> 
           
            
         
               
            <HR/>
            </ContainerMr>
        </Container>);
    
}
export default Pages;