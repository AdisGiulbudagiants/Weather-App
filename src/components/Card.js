import axios from "axios"
import { useState } from "react"
import SpringWeather from "./SpringWeather"
import styles from "./Card.module.css"

const Card = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c74ff18db6acda4525a9464826dcd4b4&units=metric`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
      })
    }
  }

  return (
    <div id="weather" className={styles.section}>
      <hr />
      <div className={styles.inputDiv}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className={styles.main}>
        <SpringWeather>
          <div className={styles.top}>
            <div className={styles.temperature}>
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className={styles.city}>
              <h1>{data.name}</h1>
            </div>
          </div>
          {data.name != undefined && (
            <div className={styles.bottom}>
              <div className={styles.first}>
                <div className={styles.feels}>
                  {data.main ? (
                    <h1>{data.main.feels_like.toFixed()}°C</h1>
                  ) : null}
                </div>
                <div className={styles.feelsLike}>
                  <h1>Feels like</h1>
                </div>
              </div>
              <div className={styles.second}>
                <div className={styles.humidity}>
                  {data.main ? <h1>{data.main.humidity}%</h1> : null}
                </div>
                <div className={styles.humidityLike}>
                  <h1>Humidity</h1>
                </div>
              </div>
              <div className={styles.third}>
                <div className={styles.wind}>
                  {data.wind ? (
                    <h1>{data.wind.speed.toFixed()} Km/h </h1>
                  ) : null}
                </div>
                <div className={styles.windSpeed}>
                  <h1>Wind speed</h1>
                </div>
              </div>
            </div>
          )}
        </SpringWeather>
      </div>
    </div>
  )
}

export default Card
