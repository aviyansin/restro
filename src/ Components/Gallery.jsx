import React from 'react'

function Gallery({gallimg,heading}) {
  return (
   <>
   <div className='galall'>
    <h1>{heading}</h1>
   </div>
   
   <div className='gall'>
<img src={gallimg} alt="" />
   </div>
   
   
   
   
   </>
  )
}

export default Gallery
