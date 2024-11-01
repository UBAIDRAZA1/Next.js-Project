'use client'
import {useState} from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1 className='text-4xl font-bold bg-red-200 ' >Count:{count}</h1> <br/>
        <button className='bg-blue-500 text-4xl font-bold border-collapse'  onClick={() => setCount(count + 2)} ><u>Increase</u></button>
    </div>
  )
}

