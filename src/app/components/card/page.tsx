import Link from 'next/link'
import React from 'react'

// Define the interface for the props
interface TProps {
  name: string;
  rollno: string;
  day: string;
}

const Card = (props:TProps) => {
  return (
    <div>
          
        <h1>Name:{props.name}</h1>
        <h1>RollNo:{props.rollno}</h1>
        <h1>Day:{props.day}</h1>
 
       

      <br/>

    <Link href='/'><b>Go to Home Page</b  ></Link>

    </div>
  )
}

export default Card
