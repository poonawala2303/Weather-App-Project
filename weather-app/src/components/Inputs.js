import React, { useState } from 'react'
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inputs({setQuery,units,setUnits}) {

  const[city,setCity] = useState("");

  const handleSearchClick = () =>
  {
    if(city !== "")
    {
      setQuery({q:city})
    }
  }

  const handleLocationClick = () =>
  {
     if(navigator.geolocation)
     {
        toast.info("Fetching Current Location")
        navigator.geolocation.getCurrentPosition((position) => {
          toast.success("Location Fetched Successfully")
          let lat = position.coords.latitude
          let lon = position.coords.longitude

          setQuery({
            lat,lon
          })
        })
     }
  }

  const handleUnitsChange = (e) =>
  {
    const SelectedUnit = e.currentTarget.name

    if(units !== SelectedUnit)
    {
      setUnits(SelectedUnit)
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">

        <div className="flex flex-row justify-center w-3/4 items-center justify-center space-x-4">

            <input value={city} onChange={(e) => setCity(e.target.value)} type='text' className={"text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:normal-case"} placeholder="Search for a city">

            </input>
            <UilSearch  size={30} className="text-white transition ease-out hover:scale-125" onClick={handleSearchClick}/>
            <UilLocationPoint size={30} className="text-white transition ease-out hover:scale-125" onClick={handleLocationClick}/>

        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-125" onClick={handleUnitsChange}>°C</button>
            <p className="text-xl text-white mx-1">|</p>
            <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125" onClick={handleUnitsChange}>°F</button>
        </div>

    </div>
  )
}

export default Inputs