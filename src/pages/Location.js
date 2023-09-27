import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchLocations, locationSelector } from '../redux/locationSlice'

function Location() {
  const {id} = useParams()

  const items = useSelector(locationSelector)

  const location = items.find((item)=>item.id===Number(id))

  return (
    <div className='flex flex-col justify-center h-screen w-full items-center space-x-4'>
      <h1 className='text-3xl font-bold'>{location.name}</h1>
      <div className='flex items-center justify-between w-1/3 my-6'>
        <label className='text-xl font-bold'>Type:</label>
        <label className='text-xl'>{location.type}</label>
      </div>
      <div className='flex items-center justify-between w-1/3 my-6'>
        <label className='text-xl font-bold'>Dimension:</label>
        <label className='text-xl'>{location.dimension}</label>
      </div>
    </div>
  )
}

export default Location