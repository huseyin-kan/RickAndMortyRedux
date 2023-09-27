import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Character() {
  const {id} = useParams()
  const [char,setChar]=useState(null)
  const [location,setLocation]=useState('')

  
  useEffect(()=>{
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`)
    .then((res)=>{
      setChar(res.data);
      setLocation(res.data.location.url.slice(res.data.location.url.length-2,res.data.location.url.length))    
    })
  },[id])
  return (
    <div className='flex-col h-screen flex items-center justify-center translate() py-6 px-2'>
      {
        char && 
        <div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img src={char.image} />
              <h1 className='text-2xl font-semibold'>{char.name}</h1>
          </div>
          <div className='flex flex-col space-y-6 mt-2'>
              <div className='flex justify-between items-center'>
                <label className='text-xl font-semibold'>Gender:</label>
                <label className='text-xl'>{char.gender}</label>
              </div>
              <div className='flex gap-1 justify-between items-center'>
                <label className='text-xl font-semibold'>Species:</label>
                <label className='text-xl'>{char.species}</label>
              </div>
              <div className='flex gap-1 justify-between items-center'>
                <label className='text-xl font-semibold'>Status:</label>
                <label className='text-xl'>{char.status}</label>
              </div>
              <div className='flex gap-1 justify-between items-center'>
                <label className='text-xl font-semibold'>Location:</label>
                <Link to={`/location/${location.includes('/')?location[1]:location}`} className='text-xl'>{char.location.name}</Link>
              </div>
          </div>
        </div>
      }
      </div>
  )
}

export default Character