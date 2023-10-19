import Image from 'next/image';
import React from 'react';

async function getMovie(movieId){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?&api_key=${process.env.API_KEY}&language=en-US&page=1`);
    return res.json();
}


export default async function MoviePage({params}){
    const movieId=params.id;
    const movie = await getMovie(movieId);
    return(
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>

            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                width={500}
                height={500}
                style={
                    {maxWidth:'100%',
                    height:'100%',
                }}
                className='rounded-lg'
                placeholder='blur'
                blurDataURL='/public/spinner.svg'
                alt='Movie Poster'
                >
                    
                </Image>
                <div  className='p-2'>
                    <p className=' font-bold text-lg mb-3'>
                        {movie.title || movie.name}
                    </p>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1'>
                            Overview:
                        </span>
                        {movie.overview}

                    </p>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1'>
                            Relase Date:
                        </span>
                        {movie.release_date || movie.first_air_date}

                    </p>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1'>
                            Rating:
                        </span>
                        {movie.vote_average}

                    </p>


                </div>

            </div>

        </div>
    )
};
