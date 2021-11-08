import React from 'react';
import GlobalStyles from './globals';
import { ThemeProvider } from 'styled-components';
import { useEffect } from "react";
import { useState } from 'react';
import Toggle from '../components/toggle/Toggle';
import {light, dark}from './themes/themes';
import {useTheme}from '../src/useTheme';
const Theme=({children})=>{
    const {currenttheme,switchtheme}=useTheme();
     const [themeselected, setSelectedTheme] = useState('light');
 
    
     const TogleTheme=()=>{
      if(currenttheme==='light'){
        switchtheme('dark')
      }else{
        switchtheme('light')
      }
    }
    useEffect(()=>{
     setSelectedTheme(currenttheme);
    },[currenttheme])
  
    return(
<ThemeProvider theme={themeselected==="dark"?dark:light}>
  <Toggle toggletheme={TogleTheme} theme={themeselected}/>
 
    <GlobalStyles/>
    
    {children}
</ThemeProvider>
    );
}
export default Theme;