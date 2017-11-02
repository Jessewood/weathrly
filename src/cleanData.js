

const filteredData = (data) => {
  console.log(data)
  return {
    location: data.current_observation.display_location.full,
    currentForecast: { 
      conditions: data.current_observation.weather,
      date: data.current_observation.observation_time_rfc822,
      temp: data.current_observation.temp_f,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext
    },
    sevenHourForecast: sevenHourForecast(data.hourly_forecast),
    tenDayForecast: tenDayForecast(data.forecast.simpleforecast.forecastday)
    
  }
}

const sevenHourForecast = (data) => {
  return data.map( (hour) => {
    return {
      date: hour.FCTTIME.weekday_name,
      conditions: hour.condition,
      icon: hour.icon_url,
      temp: hour.temp.english
    }
  })
}

const tenDayForecast = (data) => {
  return data.map( (day) => {
    return {
      date: day.date.weekday,
      conditions: day.conditions,
      icon: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    }
  })
}



export default filteredData