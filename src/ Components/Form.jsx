import React from 'react'

function Form() {
  return (
    <>
    <div className='formlay'>
    <form action="">

   <div className='formbe'>

      <div className=''></div>
    <label htmlFor="first">FistName</label>
    <input type="text" placeholder='Fistname' /> <br />
    <label htmlFor="last">LastName</label>
    <input type="text" placeholder='Lastname' /> <br />
    
    <label htmlFor="last">Email</label>
    <input type="Email" placeholder='Email ID' />  <br />
    <label htmlFor="last">Moblie No</label>
    <input type="Number" placeholder='Moblie No' />  <br />
   </div>

<div className='formbtn'>
    <button>Submit</button>
</div>

    </form>
    
    </div>
    
    
    
    
    </>
  )
}

export default Form
