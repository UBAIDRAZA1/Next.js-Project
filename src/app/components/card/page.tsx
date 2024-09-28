import Link from 'next/link'
import React from 'react'

// Define the interface for the props
interface CardProps {
  name: string;
  rollno: string;
  day: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
        <h1>Name: Naeem</h1>
        <h1>RollNo: 6975</h1>
        <h1>Day: Monday</h1>
          
        <h1>Name:{props.name}</h1>
        <h1>RollNo:{props.rollno}</h1>
        <h1>Day:{props.day}</h1>
 
        {/* <h1>Name:{props.name}</h1>
        <h1>Roll No:{props.rollno}</h1>
        <h1>Day: {props.day}</h1> */}

      <br/>

    <Link href='/'><b>Go to Home Page</b  ></Link>

    </div>
  )
}

export default Card
