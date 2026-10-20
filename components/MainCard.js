import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {
          // Ancienne version (OpenWeatherMap) :
          // unitSystem == "metric"
          //   ? Math.round(weatherData.main.temp)
          //   : Math.round(ctoF(weatherData.main.temp))
          unitSystem == "metric"
            ? Math.round(weatherData.current.temperature_2m)
            : Math.round(ctoF(weatherData.current.temperature_2m))
        }
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {
          // Ancienne version (OpenWeatherMap) :
          // unitSystem == "metric"
          //   ? Math.round(weatherData.main.feels_like)
          //   : Math.round(ctoF(weatherData.main.feels_like))
          unitSystem == "metric"
            ? Math.round(weatherData.current.apparent_temperature)
            : Math.round(ctoF(weatherData.current.apparent_temperature))
        }
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
