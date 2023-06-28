import React from 'react'
import { UilTemperature,UilTear,UilWind,UilSun,UilSunset, } from '@iconscout/react-unicons'



const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
         <p>Cloudy or whatever</p>
        </div>   

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img scr="" className='w-20'></img>
            <p className='flex flex-col space-y-2'>34</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm justify-center items-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real Fell:
                    <span className='font-medium ml-1'>32</span>
                </div>

                <div className='flex font-light text-sm justify-center items-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className='font-medium ml-1'>32%</span>
                </div>

                <div className='flex font-light text-sm justify-center items-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                    <span className='font-medium ml-1'>32km/h</span>
                </div>
            </div>
        </div>
    
    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
         <UilSun/>
         <p className='font-light'>Rise:<span className='font-medium ml-1'> 06.45 AM</span>
         </p>
         <p className='font-light'>|</p>

         <UilSunset/>
         <p className='font-light'>Set:<span className='font-medium ml-1'> 07.45 PM</span>
         </p>
         <p className='font-light'>|</p>

         <UilSun/>
         <p className='font-light'>High:<span className='font-medium ml-1'>45°</span>
         </p>
         <p className='font-light'>|</p>

         <UilSun/>
         <p className='font-light'>Low:<span className='font-medium ml-1'> 35°</span>
         </p>
         <p className='font-light'>|</p>

    </div>

    </div>
  )
}

export default TemperatureAndDetails