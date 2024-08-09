import React from 'react'

function Our({chefimg,chefpost,chefname,para}) {
  return (
   <>
  
   <div className='ourmain'>
   


    <div className='ourflex'>


        <div className='chef'>
            <div className='chifde'>
     <img src={chefimg} alt="" />
         <h2>{chefpost}</h2>
         <h3>{chefname}</h3>
         <p>{para}</p>
      </div>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Our
