import React from "react";
import styles from "../styles/weatherMainInfo.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/maps.css";

const WeatherMainInfo = ({ weather }) => {
  let position = [weather.location.lat, weather.location.lon];
  if(position.length===0){
    position = [51.505, -0.09]

  }
    console.log(position);
  return (
    <>
      <div>
        <div className={styles.mainInfo}>
          <div className={styles.city}>{weather?.location?.name}</div>
          <div className={styles.country}>{weather?.location?.country}</div>
          <div className={styles.row}></div>
          <img src={`http:${weather?.current?.condition?.icon}`} width="128" alt={weather}/>
          <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current?.condition.text}
          </div>
          <div className={styles.current}>{weather?.current?.temp_c}º</div>
        </div>
        </div>
       
        <MapContainer className="leaflet-container" center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
    
    </>
  );
};

export default WeatherMainInfo;
