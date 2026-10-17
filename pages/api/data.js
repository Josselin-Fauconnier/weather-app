import config from "../../configjson/weather.json";

// Ancienne version (OpenWeatherMap) : la ville était tapée par l'utilisateur
// dans la barre de recherche, envoyée en POST, et une clé API était nécessaire.
//
// export default async function handler(req, res) {
//   const { cityInput } = req.body;
//   const getWeatherData = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
//   );
//   const data = await getWeatherData.json();
//   res.status(200).json(data);
// }

// Nouvelle version (Open-Meteo) : la ville vient du fichier de configuration,
// pas de clé API, et le nom de la ville est ajouté car l'API ne le renvoie pas.
export default async function handler(req, res) {
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day,wind_speed_10m,wind_direction_10m,visibility&daily=sunrise,sunset&timezone=auto&wind_speed_unit=ms&forecast_days=1`
  );
  const data = await getWeatherData.json();
  res.status(200).json({ ...data, city: config.city, country: config.country });
}
