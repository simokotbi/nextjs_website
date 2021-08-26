import React from 'react';
import Link from 'next/link';
import { Container } from '../../src/layout/LayoutStyles';
import {Pagesgrid,Img}from './PagesStyle';
import { OurServices } from '../constants/Constants';
import img from '../../public/images/1.jpg';
import { element } from 'prop-types';

const Pages=()=>{

   return ( 
        <Container>
             
        
         
                      <Pagesgrid >     
            {OurServices.map((myelement,id)=>{
                    return( 
            <Img key={id} src={myelement.image}/>
             );
            })}
           
            </Pagesgrid> 
           
            
         
               
             
        </Container>);
    
}
export default Pages;