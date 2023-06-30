import React from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react';

const Inputs = ({setQuery,units,SetUnits}) => {
  const [city,setCity]=useState("");

  const search=()=>{
      if(city!==''){
        setQuery({q:city})
      }
  }

  const handleLocationClick=()=>{
     if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition((position)=>{
          let lat=position.coords.latitude;
          let lon=position.coords.longitude;
        
        setQuery({lat,lon});
       })
     }
  }

  return (
    <div className='flex flex-row justify-center my-6'>
     <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input placeholder="search for city..." type="text" className='text-xl font-light p-2 w-full rounded-[5px] shadow-xl focus:outline-none capitalize placeholder:lowercase' value={city} onChange={(e)=>setCity(e.currentTarget.value)}></input>
        <UilSearch  size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={search}/>
        <UilLocationPoint size={25} className="text-white cursor-pointer  transition ease-out hover:scale-125" onClick={handleLocationClick}/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name="metric" className='text-xl text-white font-light hover:scale-150 transition ease-out'>°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name="imperial" className='text-xl text-white font-light hover:scale-150 transition ease-out' >°F</button>      
      </div>

    </div>

  )
}

export default Inputs