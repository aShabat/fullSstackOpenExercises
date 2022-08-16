import axios from "axios"
import { useEffect } from "react"

const Capital = ({ capitals }) => {
  if (capitals === undefined) return <p>no capital</p>
  if (capitals.length === 1) return <p>capital: {capitals[0]}</p>
  return (
    <div>
      capitals:
      <ul>
      {capitals.map(capital => <li key={capital}>       {capital}</li>)}
      </ul>
    </div>
  )
}

const Languages = ({ languages }) => (
  <ul>
    {languages === undefined
     ? <li>none</li>
     : Object.keys(languages).map(lang => <li key={lang}>{languages[lang]}</li>)}
  </ul>
)

const Weather = ({ countrie,  weather }) => {
  if (weather === undefined) return <></>
  return <div>
    <h4>Weather in {countrie.capital[0]}</h4>
    <p>
      temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius
    </p>
    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
    <p>
      wind {weather.wind.speed} m/s
    </p>
  </div>
}

const Countrie = ({ countrie, show, handleShow, weather, setWeather }) => {
  useEffect(() => {
    setWeather(undefined)
  }, [])

  useEffect(() => {
    if (show && weather === undefined && countrie.capital !== undefined && countrie.capital.length === 1) {
      const [lat, lon] = countrie.capitalInfo.latlng
      const api_key = process.env.REACT_APP_API_KEY
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
      axios
        .get(api)
        .then(response => {
          setWeather(response.data)
        })
    }
  })

  return (
    <div>
      <h2>
        {countrie.name.common+' '}
        <button onClick={handleShow}>{show?'hide':'show'}</button>
      </h2>
      <p />
      {show
      ? <>
          <Capital capitals={countrie.capital} />
          <p>area {countrie.area}</p>
          <p />
          <h4>languages</h4>
          <Languages languages={countrie.languages} />
          <img src={countrie.flags.png} style={{border:'1px solid #000000'}}/>
          <Weather countrie={countrie} weather={weather} />
        </>
      : <p />
      }
    </div>
  )
}

export default Countrie