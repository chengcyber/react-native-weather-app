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

export const iconName = {
  Default: 'md-time',
  Clear: 'md-sunny',
  Rain: 'md-rainy',
  Thunderstorm: 'md-thunderstorm',
  Clouds: 'md-cloudy',
  Snow: 'md-snow',
  Drizzle: 'md-umbrella',
}

export const phrase = {
  Default: {
    title: 'Fetching current weather',
    subtitle: 'Be patient, you are witnessing a miracle',
    highlight: 'Fetching',
    color: '#636363',
    background: '#9C9C9C'
  },
  Clear: {
    title: 'Sunny, have a good time.',
    subtitle: 'go out side!',
    highlight: 'Sunny',
    color: '#E32500',
    background: '#FFD017'
  },
  Rain: {
    title: 'rain... rain... rain... go away',
    subtitle: 'stay home all day',
    highlight: 'away',
    color: '#004A96',
    background: '#2F353A'
  },
  Thunderstorm: {
    title: 'thundstrike coming !',
    subtitle: 'unplug devices',
    highlight: 'thundstrike',
    color: '#F8FF46',
    background: '#020202'
  },
  Clouds: {
    title: 'uphead see blue sky',
    subtitle: 'oh blue and white',
    highlight: 'blue',
    color: '#0044FF',
    background: '#939393'
  },
  Snow: {
    title: 'I got a freezing head',
    subtitle: 'no idea today',
    highlight: 'freezing',
    color: '#021D4C',
    background: '#15A678'
  },
  Drizzle: {
    title: 'Little Little Rain',
    subtitle: 'take your umbrella',
    highlight: 'Little',
    color: '#B3F6E4',
    background: '#1FBB68'
  },
  
}