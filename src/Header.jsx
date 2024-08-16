import React from 'react'
import { DataContex } from './contexdata'
import { useContext } from 'react'





function Header() {
 let state = useContext(DataContex)
  console.log(state);
  
  return (
    <section  className='text-center bg-body-tertiary mt-3 border border-black' >
    <h1>Mobile Shop</h1>
      
    </section>
  )
}

export default Header