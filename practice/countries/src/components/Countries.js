import Countrie from "../Countrie"

const Countries = ({ countries, shows, handleShowGenerator, weather, setWeather }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  return (
    <div>
      {countries
        .map((countrie, index) => <Countrie 
                                    key={countrie.name.common} 
                                    countrie={countrie} 
                                    show={shows[index]}
                                    handleShow={handleShowGenerator(index)}
                                    weather={weather} setWeather={setWeather} />)}
    </div>
  )
}

export default Countries