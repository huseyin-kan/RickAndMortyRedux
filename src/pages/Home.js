import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters, nextPage, previousPage } from '../redux/characterSlice'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {Link} from 'react-router-dom'

function Home() {
  const data = useSelector(state=>state.characters.items)
  const isLoading = useSelector(state=>state.characters.isLoading)
  const error = useSelector(state=>state.characters.error)
  const dispatch = useDispatch()

  const [page,setPage] = useState(1)
  useEffect(()=>{
    dispatch(fetchCharacters(page))
  },[dispatch])

  if(isLoading) return <Loading/>
  
  if(error) return <Error message={error}/>
  
  const next =(e)=>{
    e.preventDefault()
    dispatch(fetchCharacters(page+1))
    setPage(page+1)
  }
  const previous=(e)=>{
    e.preventDefault()
    dispatch(fetchCharacters(page-1))
    setPage(page-1)
  }

    return (
    <div className='flex items-center flex-col justify-center p-2'>
        <h1 className='font-bold text-2xl'>Characters</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4'>
        {data.map(character=>(
            <div key={character.id} className=' h-88 w-80  '>
                <Link to={`/character/${character.id}`} className='flex flex-col items-center justify-center hover:opacity-80 transition-all duration-200 ease-in-out'>
                <img src={character.image} className='w-full'/>
                <h2 className='text-xl'>{character.name}</h2>
                </Link>
            </div>
        ))}
        </div>
        <div className='flex justify-between w-80 items-center gap-2'>
            <button disabled={page===1} onClick={previous} className='bg-gray-700 text-white text-center px-4 w-28 py-2 hover:bg-gray-600 hover:cursor-pointer disabled:cursor-not-allowed'>Previous</button>
                <label className='text-2xl text-center font-semibold'>{page}</label>
            <button disabled={page===20} onClick={next} className='bg-gray-700 text-white text-center px-4 w-28 py-2 hover:bg-gray-600 hover:cursor-pointer disabled:cursor-not-allowed'>Next</button>
        </div>
    </div>
  )
}

export default Home