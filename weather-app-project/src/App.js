import './App.css';
import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useState  } from "react";
import { useEffect } from 'react';


function App() {

  const [query,setQuery]= useState({q:'mumbai'});
  const [units,setUnits]= useState("metric");
  const [weather,setWeather]= useState(null);

 
  useEffect(()=>{
    const fetchWeather = async()=>{
      await getFormattedWeatherData({...query,units}).then(
        (data)=>{
            setWeather(data);
        });
      
    }
  
    fetchWeather();
  },[query,units]);


  

  return (
    <div className='mx-auto max-w-screen-md mt-4 mb-8 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl h-fit shadow-gray-400 '>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} />

      {weather &&(
        <div>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetails weather={weather}/>

      <Forecast title={"hourly forecast"} items={weather.hourly}/>
      <Forecast title={"Daily forecast"}/>

        </div>
      )}


    </div>
    
  );
}

export default App;
