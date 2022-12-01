import React, { useEffect, useState } from 'react'
import Loading from './Loading';



import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMAinInfo';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
 
    useEffect(() => {
      loadInfo();
    
    }, []);
  
    useEffect(() => {
      document.title = "Weather | " + weather?.location?.name ?? "";
     
    }, [weather]);
  
    async function loadInfo(city = "london") {
        console.log(
          `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&lang=es`
        );
        try {
          const request = await fetch(
            `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&lang=es`
          );
          const json = await request.json();
          console.log(json);
    
          setTimeout(() => {
            setWeather({ ...json });
          
          }, 2000);
        } catch (e) {
          console.error(e);
        }
      }
    
      function handleOnChangeCity(city) {
        setWeather(null);
        loadInfo(city);
      }
     
  return (
    <div>
       <WeatherForm onChangeCity={handleOnChangeCity}/>
       {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    
    </div>
  )
}

export default WeatherApp