import React, { useState } from 'react'
import  "../styles/form.css";

const WeatherForm = ({ onChangeCity }) => {
    const [city, setCity] = useState("");

    function handleChange(e) {
        setCity(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        if (!city || city !== "") {
           
          onChangeCity(city);
        }
      }
    
    return (
    <div >
    <form className='container' onSubmit={handleSubmit} >
      <input className='input'
        placeholder='Ingrese un País'
        type="text"
        value={city}
        onChange={handleChange}
      />
    </form>
    </div>
  )
}

export default WeatherForm