import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <h2>
        {
          // Ancienne version (OpenWeatherMap) :
          // `${getWeekDay(weatherData)}, ${getTime(
          //   unitSystem,
          //   weatherData.dt,
          //   weatherData.timezone
          // )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`
          `${getWeekDay(weatherData)}, ${getTime(
            unitSystem,
            weatherData.current.time
          )} ${getAMPM(unitSystem, weatherData.current.time)}`
        }
      </h2>
    </div>
  );
};
