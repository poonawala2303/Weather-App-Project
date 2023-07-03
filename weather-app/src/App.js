import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/WeatherService';
import getFormattedWeatherData from './services/WeatherService'
import { useState , useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query ,setQuery] = useState({q:'kalyan'})
  const [units ,setUnits] = useState('metric')
  const [weather , setWeather] = useState(null)

  useEffect(() =>{

    const fetchWeather = async () =>
    {
      const message = query.q ? query.q : 'Curent Location.'

      toast.info('Fetching Weather for ' + message)

      await getFormattedWeatherData({...query,units}).then(
        data =>{

          toast.success(`Successfully fetched weather for ${data.name} , ${data.country}`)
          setWeather(data)})
    }
    
    

  fetchWeather();

  }, [query,units])  

  

  const formatBg = () =>
  {
    if(!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold)
    {
      return 'from-cyan-700 to-blue-700'
    }

    else return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBg()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      
      {weather && (
        <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather}/>
  
        {/* <Forecast title="Hourly Forecast"/>
        <Forecast title="Daily Forecast"/> */}

        </div>
      )}

    <ToastContainer autoClose={1700} theme='colored' newestOnTop={true} />

    </div>


  );
}

export default App;
