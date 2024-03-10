import React from 'react'
import './Banner.css'
export default function Banner() {
  return (
    <div className='Banner'>
       <div className='content'>
        <h1 className='title'>Movie name</h1>
         <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
         </div>
         <h1 className='description'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</h1>
        

       </div>
       <div className="faded"></div>
      
    </div>
  )
}
