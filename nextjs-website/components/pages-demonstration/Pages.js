import React from 'react';
import Link from 'next/link';
import { Container } from '../../src/layout/LayoutStyles';
import {Pagesgrid,Img}from './PagesStyle';
function Pages(){

    return(
        <Container>
            <Pagesgrid>
            <Img src="https://cdn.logo.com/hotlink-ok/logo-social.png" rel=""/>
            <Img src="https://cdn.logo.com/hotlink-ok/logo-social.png" rel=""/>
            <Img src="https://cdn.logo.com/hotlink-ok/logo-social.png" rel=""/>
            
            </Pagesgrid>
        </Container>
    );
}
export default Pages;