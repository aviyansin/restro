import React from 'react'

function Header({logobar}) {
  return (
   <>
    
       <div className='head'>
       <div className='main'>
       <div className='logo'>
        <img src={logobar} alt="" />
       </div>
        <div className='list'>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/contect">CONTACT</a></li>
        </ul>
       </div>
        </div>

     <div className='slow'>
        <h1>  SELECT <br/>
DELICIOUS <br/>
TRY <br/>
SPECIAL.</h1>
     </div>
     <div className='btn'>
        <button>ORDER ONLINE</button>
       </div>
       </div>
       
   
   
   </>
  )
}

export default Header
