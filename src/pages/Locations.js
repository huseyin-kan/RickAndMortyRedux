import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { errorSelector, fetchLocations, locationSelector, statusSelector } from '../redux/locationSlice'
import Error from '../components/Error'
import Loading from '../components/Loading'

function Locations() {
    const data = useSelector(locationSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)
    const dispatch = useDispatch()
    useEffect(()=>{
      if(status==='idle'){
        dispatch(fetchLocations())   
      }
    },[dispatch])

    if(error) return <Error message={error}/>

    if(status==='loading') return <Loading/>

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 px-4'>
        {
            status==='succeeded' && data.map(location=>(
                    <Link key={location.id} to={`/location/${location.id}`} className='w-60 h-60 flex items-center justify-center bg-gray-400 rounded-md px-2 py-2 text-white  hover:bg-gray-600 transition-all ease-in-out duration-300'>
                        {location.name}
                    </Link>
        ))
        }
    </div>
  )
}

export default Locations