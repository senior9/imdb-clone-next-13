import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({result}) => {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link 
            href={`/movie/${result.id}`}
            >
                <Image
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                width={500}
                height={500}
                style={
                    {maxWidth:'100%',
                    height:'auto',
                }}
                className='sm:rounded-t-lg group-hover:opacity-40 transition-opacity duration-300'
                placeholder='blur'
                blurDataURL='/public/spinner.svg'
                alt='Image not avilable'
                >
                    
                </Image>


            <div className='p-2'>
                 <p className='line-clamp-2'>
                    {result.overview}
                 </p>
                 <p className='truncate font-bold text-lg'>{result.title || result.name } </p>
                 <p className='flex items-center'>
                 {result.release_date || result.first_air_date}
                 <FiThumbsUp className='h-5 mr-1 ml-3'/>
                 {result.vote_count}
                 </p>
            </div>
            </Link>
        </div>
    );
};

export default Card;