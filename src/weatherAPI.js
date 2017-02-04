import config from './config'

let units = 'metric'

export const fetchWeather = (lat, lon) => {
  const url = `${config.weatherUrl}?appid=${config.weatherKey}&lat=${lat}&lon=${lon}&units=${units}`
  console.log(url)

  return fetch(url)
    .then(res => res.json())
    .then(res => ({
      temperature: Math.round(res.main.temp),
      weather: res.weather[0].main
    }))
}






export const getCurrentPosition = () => 
    navigator.geolocation.getCurrentPosition(
      (posData) => 
        fetchWeather(posData.coords.latitude, posData.coords.longitude),
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 10000}
    )

