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
            console.log(data)
            setWeather(data);
        });
      
    }
  
    fetchWeather();
  },[query,units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 40 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  

  return (
    <div
    className={`mx-auto max-w-screen-md mt-4 py-5 px-32 mb-10 bg-gradient-to-br h-fit rounded-[15px] ${formatBackground()}`} id="box"
  >
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
