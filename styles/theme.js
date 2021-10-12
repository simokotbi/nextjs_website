import React from 'react';
import GlobalStyles from './globals';
import { ThemeProvider } from 'styled-components';
import theme  from '../styles/themes/default';

const Theme=({children})=>{
    return(
<ThemeProvider theme={theme}>
    <GlobalStyles/>
    {children}
</ThemeProvider>
    );
}
export default Theme;