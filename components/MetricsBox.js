import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        // Ancienne version (OpenWeatherMap) : metric={weatherData.main.humidity}
        metric={weatherData.current.relative_humidity_2m}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        // Ancienne version (OpenWeatherMap) : metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        metric={getWindSpeed(unitSystem, weatherData.current.wind_speed_10m)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        // Ancienne version (OpenWeatherMap) : metric={degToCompass(weatherData.wind.deg)}
        metric={degToCompass(weatherData.current.wind_direction_10m)}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        // Ancienne version (OpenWeatherMap) : metric={getVisibility(unitSystem, weatherData.visibility)}
        metric={getVisibility(unitSystem, weatherData.current.visibility)}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        // Ancienne version (OpenWeatherMap) :
        // metric={getTime(
        //   unitSystem,
        //   weatherData.sys.sunrise,
        //   weatherData.timezone
        // )}
        // unit={getAMPM(
        //   unitSystem,
        //   weatherData.sys.sunrise,
        //   weatherData.timezone
        // )}
        metric={getTime(unitSystem, weatherData.daily.sunrise[0])}
        unit={getAMPM(unitSystem, weatherData.daily.sunrise[0])}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        // Ancienne version (OpenWeatherMap) :
        // metric={getTime(
        //   unitSystem,
        //   weatherData.sys.sunset,
        //   weatherData.timezone
        // )}
        // unit={getAMPM(unitSystem, weatherData.sys.sunset, weatherData.timezone)}
        metric={getTime(unitSystem, weatherData.daily.sunset[0])}
        unit={getAMPM(unitSystem, weatherData.daily.sunset[0])}
      />
    </div>
  );
};
