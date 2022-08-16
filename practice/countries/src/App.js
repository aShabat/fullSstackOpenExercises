import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')
  const [foundCountries, setFoundCountries] = useState([])
  const [found, setFound] = useState(true)
  const [shows, setShows] = useState([])
  const [weather, setWeather] = useState(undefined)

  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
    setFound(false)
  }

  const searchCountries = () => {
    const newFoundCountries = countries.filter(
      countrie => countrie.name.common.toLowerCase().includes(searchString.toLowerCase())
    )
    setFoundCountries(newFoundCountries)
    setShows(newFoundCountries.map(c => newFoundCountries.length === 1))
  }

  if (!found) {
    searchCountries()
    setFound(true)
  }

  const handleShowGenerator = (index) => {
    const handleShow = () => {
      const newShows = shows.map(elem => false)
      newShows[index] = !shows[index]
      setWeather(undefined)
      setShows(newShows)
    }
    return handleShow
  }

  const weatherAPI = (countrie) => {
    if (countrie.capital === undefined || countrie.capital.length !== 1) return undefined
    const [lat, lon] = countrie.capitalInfo.latlng
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    return api
  }

  useEffect(() => {
    console.log('loading countries')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('loaded contries')
        setCountries(response.data)
        setFound(false)
      })
  }, [])

  return  (
    <div>
      <SearchForm searchString={searchString} handleSearchChange={handleSearchChange} />
      <Countries countries={foundCountries} shows={shows} handleShowGenerator={handleShowGenerator} weather={weather} setWeather={setWeather} />
    </div>
  )
}

export default App