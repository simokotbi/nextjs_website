import React from 'react';
import Link from 'next/link';

import {GlobalHeader,Div1,Div2,Logo,NavLink} from './HeaderStyles';

function Header(){ 
     return(
  
   <GlobalHeader> 
      <Div1>
         <Logo>K</Logo>
      </Div1>
      <Div2>
         <Link href="#">
         <li>
         <NavLink>
           home
        </NavLink>
        </li>
        </Link>
        
        <Link href="#">
         <li>
         <NavLink>
           about 
        </NavLink>
        </li>
        </Link>
      </Div2>
   </GlobalHeader>


);
}
export default Header;

