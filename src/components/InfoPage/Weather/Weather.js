import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import pressure from "../../img/pressure.png";
import wind from "../../img/wind.png";
import humidity from "../../img/humidity.png";
import heavyRainImage from "../../img/heavyRain.png";
import sunnyImage from "../../img/sunny.png";
import partlyCloudyImage from "../../img/partlyCloudy.png";
import cloudyImage from "../../img/cloudy.png";

const conditionImages = {
  HeavyRain: heavyRainImage,
  Sunny: sunnyImage,
  PartlyCloudy: partlyCloudyImage,
  Cloudy: cloudyImage,
  // Clear
};

function Weather() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=Pune&aqi=no"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const today = new Date();
    const date = String(today.getDate());
    const month = String(today.getMonth() + 1);
    const year = today.getFullYear();
    const completeDate = `${date}-${month}-${year}`;
    setDate(completeDate);

    const hour = String(today.getHours());
    const min = String(today.getMinutes());
    const ampm = today.getHours() >= 12 ? "PM" : "AM";
    const completeTime = `${hour}:${min} ${ampm}`;
    setTime(completeTime);
  }, []);
  return (
    <div className={styles.weatherBody}>
      <div className={styles.dateBox}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      {weather ? (
        <div className={styles.weatherBox}>
          <div>
            <img
              src={conditionImages[weather.current.condition.text]}
              alt={weather.current.condition.text}
              style={{
                height: "40px",
                width: "50px",
                marginTop: "20px",
                color: "white",
              }}
            />
            <p>{weather.current.condition.text}</p>
          </div>
          <div className={styles.line}>______________</div>
          <div>
            <h1>{weather.current.temp_c}°C</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={pressure}
                style={{ height: "30px", width: "17px", marginTop: "15px" }}
              />
              <div>
                <p>{weather.current.pressure_mb} mbar</p>
                <p>Pressure</p>
              </div>
            </div>
          </div>
          <div className={styles.line}>______________</div>
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={wind}
                style={{ height: "30px", width: "40px", marginTop: "15px" }}
              />
              <div>
                <p>{weather.current.wind_kph}km/h</p>
                <p>Wind</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={humidity}
                style={{ height: "30px", width: "20px", marginTop: "15px" }}
              />
              <div>
                <p>{weather.current.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading data</p>
      )}
    </div>
  );
}

export default Weather;
