import React from 'react';
import Header from '../../components/Header';
import { Container,Circle } from './LayoutStyles';
import { Example } from '../../components/animations/animation';


function Layout ({children}){
  
return (
<Container>

<Header/>
<Circle><Example/></Circle>
<main >{children}</main> 
</Container>
);
}


export default Layout;
