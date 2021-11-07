import { useEffect } from "react";
import { useState } from "react";


export const useTheme =()=>{
    // const themefromlc="";
    const [currenttheme,SetcurentTheme]=useState(()=>{
        if(typeof window!='undefined'){
           return  localStorage.getItem("theme")==null?"light":localStorage.getItem("theme");
        }
        return ;
    });
   

const switchtheme=(themetype)=>{
    SetcurentTheme(themetype);
}
useEffect(()=>{
    window.localStorage.setItem("theme",currenttheme);
    
    console.log(currenttheme)
},[currenttheme])
return {currenttheme,switchtheme};
}