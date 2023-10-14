"use client"
import React, { useEffect } from 'react';

const Error = ({error,reset}) => {
    useEffect(()=>{
        console.log(error)
    },[error])
    return (
        <div className='text-center mt-10'>
            <h3> Something went wrong</h3>
            <button className='hover:text-amber-700 bg-gray-600 font-semibold py-2 rounded px-5' onClick={()=>reset()}>Try agagin</button>
        </div>
    );
};

export default Error;