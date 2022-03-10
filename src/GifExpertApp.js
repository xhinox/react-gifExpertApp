import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'FullMetal'] );
    //     setCategories( cats => [ ...cats, 'FullMetal' ])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories }
            />
            <hr />
            
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;