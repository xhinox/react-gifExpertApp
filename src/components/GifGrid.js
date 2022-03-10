import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && <h4 className='animate__animated animate__flash'>Loading...</h4> }

            <section className='card-grid'>
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </section>
        </>
    )
}
