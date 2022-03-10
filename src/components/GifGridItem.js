import React from 'react'

export const GifGridItem = ({ title, url }) => {
    
  
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
      <div>{title}</div>
    </div>
  )
}
