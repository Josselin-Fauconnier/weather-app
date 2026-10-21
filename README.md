# Weather App

Display the current weather of a pre-configured city on public transport information screens. Weather data comes from the [Open-Meteo](https://open-meteo.com/) API and is refreshed every hour. Switch between metric and imperial units.

![Alt img](https://images.ctfassets.net/zlsyc9paq6sa/3uBrJ07WSM40FpolgjInHY/7d886cb4187b52194bf9b63c183a1d3a/1627637330_x.gif)

## Features

1. City configured in a JSON file (`configjson/weather.json`)

2. Current local time and date

3. Temperatures and humidity

4. Wind speed and direction

5. Sunrise and sunset times

6. Metric vs Imperial system

7. Error handling and loading info

8. Automatic data refresh every hour

## Installation

1. `git clone https://github.com/Josselin-Fauconnier/weather-app.git`

2. `cd weather-app`

3. `npm install`

4. Set the city in `configjson/weather.json` (no API key needed):

   ```json
   {
     "city": "Montreuil",
     "country": "FR",
     "latitude": 48.8642,
     "longitude": 2.4432
   }
   ```

5. `npm run dev`

## Nettoyage recherche par texte

The city search has been removed: the city now comes from the configuration file. The following files have been deleted 

- `components/Search.js` and `components/Search.module.css`: search bar component, no longer used
- `.env.example`: contained the OpenWeatherMap API key, no longer needed with Open-Meteo

## Contributions

Any feature requests and pull requests are welcome!

## License

The project is under [MIT license](https://choosealicense.com/licenses/mit/).
