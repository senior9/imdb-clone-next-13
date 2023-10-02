"use client";
import React, { useEffect, useState } from 'react';
import {MdLightMode} from "react-icons/md"
import {BsFillMoonFill} from "react-icons/bs"
import { useTheme } from 'next-themes';
const DarkMode = () => {
    const {systemTheme,theme,setTheme} = useTheme();
    const [mountedTheme,setMounted] = useState(false)
    const currentTheme = theme ==="system" ? systemTheme:theme;
    useEffect(()=>
        setMounted(true)
     ,[])
    return (
        <>
        {
         mountedTheme &&(    currentTheme==="dark"? (<MdLightMode className='cursor-pointer hover:text-amber-500 ' onClick={()=>setTheme("light")}/>):(<BsFillMoonFill className='cursor-pointer hover:text-amber-500' onClick={()=>setTheme("dark")} />)  
        )}
            
            
        </>
    );
};

export default DarkMode;