"use client"
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Blog() {
    const [count, setCount]= useState(0)
    const handleIncrease=()=>{
        setCount((prev)=>prev+1)
    }

    useEffect(()=>{
        if(count==5){
            notFound()
        }
    },[count])
  return (
    <div>
        <h1>Blog Page</h1>
        <h3><b>Note: Example of triggering if not-found page conditionally. If count is more than 5, then it will redirect to not-found page</b></h3>
        <h3>Count: {count}</h3>
    <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default Blog

