import { useEffect } from "react";
import { useState } from "react";


export const useTheme =()=>{
  
    const [currenttheme,setcurentTheme]=useState(()=>{
        if(typeof window!='undefined'){
           return  localStorage.getItem("theme")==null?"light":localStorage.getItem("theme");
        }
        return ;
    });
    

const switchtheme=(themetype)=>{
    setcurentTheme(themetype);
}

useEffect(()=>{
    switchtheme(currenttheme);
    window.localStorage.setItem("theme",currenttheme);
    // console.log("from usethem: " +currenttheme)
},[switchtheme])

return {currenttheme,switchtheme};
}