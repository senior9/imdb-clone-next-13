'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchBox = () => {
const [search,setSearch] =useState("");
const router =useRouter();

function handleSubmit(e){
  e.preventDefault();
  if(!search) return 
  router.push(`/search/${search}`)
}

    return (
        <div>
            
            <form onSubmit={handleSubmit} className='max-w-6xl mx-auto flex justify-between items-center px-5'>
                <input
                value={search}
                type='text'
                placeholder='serach keywords...'
                className='w-full h-14 placeholder-gray-500 rounded-sm outline-none bg-transparent'
                onChange={(e)=>setSearch(e.target.value)}
                
                />
                <button disabled={!search}   type='submit' className='text-amber-600 disabled:text-gray-500'>serach</button>
                
            </form>
        </div>
    );
};

export default SearchBox;