import React from 'react';
import GlobalStyles from './globals';
import { ThemeProvider } from 'styled-components';
import theme  from '../styles/themes/default';
import {default as dark}from '../styles/themes/dark';
const Theme=({children})=>{
    return(
<ThemeProvider theme={dark}>
    <GlobalStyles/>
    {children}
</ThemeProvider>
    );
}
export default Theme;