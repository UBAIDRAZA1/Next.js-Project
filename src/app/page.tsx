'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";
import Card from './components/card/page';

const Home = () => {
  const route = useRouter()
  return (
    <>
    <h1>Hello World</h1>
    <br/><br/>
    <Link href='/components/about'><b>Go to About Page</b></Link>
   
    <div>
    <Card name='Asharib' rollno='2765' day='Tueday' />
    
    {/* <Card name='Ubaid' rollno='2639' day='Wednesday' /> */}
    </div>
   <br /><br />
   
    {/* Button  */}
   <div style={{
      border: '2px solid black', // Box ka border
      padding: '7px',           // Andar se space dena (padding)
      width: '150px',            // Box ka width
      margin: '0 auto',          // Center align karne ke liye
      textAlign: 'center',       // Text ko center align karne ke liye
      borderRadius: '10px',      // Thoda rounded corners dena
    }}>
      <button 
        onClick={() => route.push('/components/card')} 
        style={{
          padding: '5px 10px',  // Button ka padding
          backgroundColor: '#4CAF50', // Green background color
          color: 'white',        // Text color white
          border: 'none',        // Border remove
          borderRadius: '5px',   // Button ka rounded corners
          cursor: 'pointer',     // Pointer cursor on hover
          fontWeight: 'bold',    // Bold text
        }}>
        Go to Card Page
      </button>
    </div>    

    </>
    
  )
}

export default Home
