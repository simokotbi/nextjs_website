import React from 'react';
import {Container}from '../../src/layout/LayoutStyles';
import {ContainerMr}from '../../styles/GlobalComponents/index';
import {Footersection,Linkslist,Footerwraper,FooterGrid,Listheader,Linkitem,SocialList,SocialIcons,FooterEndtext}from './FooterStyles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer(){

    return(
        <Container id="footer">
        <ContainerMr bgprimary>
            <Footersection>
                <Footerwraper>
                    <FooterGrid>
            <Linkslist>
            <Listheader>
                Call
            </Listheader>
<Linkitem href="tel:0649437898" >0649437898</Linkitem>

            </Linkslist>
            <Linkslist>
            <Listheader>
                Email
            </Listheader>
<Linkitem href="kotbi.mohamed.dev@gmail.com">
    kotbi.mohamed.dev@gmail.com</Linkitem>

            </Linkslist>
            <Linkslist>
            

    <Listheader>
                Social
            </Listheader>
          <SocialList> 
               <SocialIcons href="https://github.com/simokotbi">
<AiFillGithub size="2rem"/>Github</SocialIcons>
<SocialIcons href="https://www.linkedin.com/in/kotbi-mohamed-2173ba203/">
<AiFillLinkedin size="2rem"/>Linkedin</SocialIcons>
</SocialList>

            </Linkslist>
            </FooterGrid>
            <FooterEndtext>
            Copyright © , created with heart by kotbi mohamed.
                 </FooterEndtext>
            </Footerwraper>
            </Footersection>
</ContainerMr>
</Container>
    );
}
export default  Footer;