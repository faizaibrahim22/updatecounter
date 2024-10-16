"use client"
import { useState } from "react";

export default function Home(){
  const [time,settime] = useState(0)
  return(
    <div>
      <h1>{time}</h1>
      <button  className="bg-violet-950 text-zinc-200 p-8  rounded-2xl" onClick={()=>{
        settime(time + 1)
      }}>yes</button>
      <hr/>
      <button  className="bg-pink-700 text-zinc-200 p-8  rounded-2xl" onClick={()=>{
        settime(time - 1)
      }}>No</button>
    </div>
  )
}
