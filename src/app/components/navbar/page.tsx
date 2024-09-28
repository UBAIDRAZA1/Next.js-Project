import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <h1>Navbar Page</h1>
    
    <br /><br />
   <Link href='/components/contact'><b>Go to Contact</b></Link>

    
    </>
  )
}

export default Navbar