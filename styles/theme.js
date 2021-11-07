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
    const [theme, setSelectedTheme] = useState(currenttheme);
 
   const TogleTheme=()=>{
      if(theme==='light'){
        switchtheme("dark")
      }else{
        switchtheme('light')
      }
    }
    
     useEffect(() => {
    setSelectedTheme(currenttheme);
    // console.log("selectedTheme inside useeffect: "+theme+"current one :"+currenttheme)
   }, [currenttheme,TogleTheme]);
 
    return(
<ThemeProvider theme={theme==="dark"?dark:light}>
    <GlobalStyles/>
    <Toggle toggletheme={TogleTheme} theme={currenttheme}/>
    {children}
</ThemeProvider>
    );
}
export default Theme;