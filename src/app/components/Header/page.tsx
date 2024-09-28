import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <h1>Header Page</h1>
    
    <br /><br />
   <Link href='/components/footer'><b>Go to Footer</b ></Link>

    </>
  )
}

export default Header
