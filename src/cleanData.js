

const filteredData = (data) => {
  return {
    location: data.current_observation.display_location.full,
    currentForecast: { 
      conditions: data.current_observation.weather,
      date: data.current_observation.observation_time,
      icon: data.current_observation.icon_url,
      temp: data.current_observation.temp_f,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext
    },
    sevenHourForecast: sevenHourForecast(data.hourly_forecast),
    tenDayForecast: tenDayForecast(data.forecast.simpleforecast.forecastday)
    
  };
};

const sevenHourForecast = (data) => {
  return data.map( (hour) => {
    return {
      day: hour.FCTTIME.weekday_name,
      time: hour.FCTTIME.civil,
      conditions: hour.condition,
      icon: hour.icon_url,
      temp: hour.temp.english
    };
  });
};

const tenDayForecast = (data) => {
  return data.map( (day) => {
    return {
      date: day.date.weekday,
      conditions: day.conditions,
      icon: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    };
  });
};



export default filteredData;