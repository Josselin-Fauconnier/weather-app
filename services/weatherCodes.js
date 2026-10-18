
const weatherCodes = {
  0: { description: "Clear sky", icon: "01" },
  1: { description: "Mainly clear", icon: "02" },
  2: { description: "Partly cloudy", icon: "03" },
  3: { description: "Overcast", icon: "04" },
  45: { description: "Fog", icon: "50" },
  48: { description: "Depositing rime fog", icon: "50" },
  51: { description: "Light drizzle", icon: "09" },
  53: { description: "Moderate drizzle", icon: "09" },
  55: { description: "Dense drizzle", icon: "09" },
  56: { description: "Light freezing drizzle", icon: "09" },
  57: { description: "Dense freezing drizzle", icon: "09" },
  61: { description: "Slight rain", icon: "10" },
  63: { description: "Moderate rain", icon: "10" },
  65: { description: "Heavy rain", icon: "10" },
  66: { description: "Light freezing rain", icon: "10" },
  67: { description: "Heavy freezing rain", icon: "10" },
  71: { description: "Slight snowfall", icon: "13" },
  73: { description: "Moderate snowfall", icon: "13" },
  75: { description: "Heavy snowfall", icon: "13" },
  77: { description: "Snow grains", icon: "13" },
  80: { description: "Slight rain showers", icon: "10" },
  81: { description: "Moderate rain showers", icon: "10" },
  82: { description: "Violent rain showers", icon: "10" },
  85: { description: "Slight snow showers", icon: "13" },
  86: { description: "Heavy snow showers", icon: "13" },
  95: { description: "Thunderstorm", icon: "11" },
  96: { description: "Thunderstorm with slight hail", icon: "11" },
  97: { description: "Heavy thunderstorm", icon: "11" },
  99: { description: "Thunderstorm with heavy hail", icon: "11" },
};


const unknownWeather = { description: "Unknown weather", icon: "03" };

export const getWeatherInfo = (code, isDay) => {
  const weather = weatherCodes[code] || unknownWeather;
  return {
    description: weather.description,
    icon: `${weather.icon}${isDay === 1 ? "d" : "n"}`,
  };
};
