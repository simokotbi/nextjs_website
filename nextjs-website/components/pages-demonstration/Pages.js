import React from 'react';
import Link from 'next/link';
import { Container } from '../../src/layout/LayoutStyles';
import {Img,Imgbtn,H1}from './PagesStyle';
import { OurServices } from '../constants/Constants';
import img from '../../public/images/1.jpg';
import { element } from 'prop-types';
import { HR } from '../../styles/GlobalComponents';
import {ContainerMr,Grid,Card,Title}from '../../styles/GlobalComponents/index';

const Pages=()=>{

   return ( 
        <Container>
                <ContainerMr bkg="#eee">
           
        
           <Title color='#000'>Videos</Title>  
                      <Grid >  
                             
            {OurServices.map((myelement,id)=>{
                    return( 
                            <Card key={id} BGC={"white"}>
                            <Imgbtn>Reade more</Imgbtn>
                            <H1>{myelement.title}</H1>
            <Img key={id} src={myelement.image}/>
            
            </Card> );
            })}
           
            </Grid> 

            </ContainerMr>
        </Container>);
    
}
export default Pages;