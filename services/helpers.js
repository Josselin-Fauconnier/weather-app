// Ancienne version (OpenWeatherMap) : unixToLocalTime servait à convertir
// les timestamps Unix en heure locale.
// import {
//   unixToLocalTime,
//   kmToMiles,
//   mpsToMph,
//   timeTo12HourFormat,
// } from "./converters";
import { kmToMiles, mpsToMph, timeTo12HourFormat } from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

// Ancienne version (OpenWeatherMap) : l'heure arrivait en timestamp Unix
// et devait être convertie avec le fuseau horaire.
// export const getTime = (unitSystem, currentTime, timezone) =>
//   unitSystem == "metric"
//     ? unixToLocalTime(currentTime, timezone)
//     : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));
//
// export const getAMPM = (unitSystem, currentTime, timezone) =>
//   unitSystem === "imperial"
//     ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
//       ? "PM"
//       : "AM"
//     : "";

// Open-Meteo donne l'heure déjà locale au format ISO ("2026-10-20T08:15") :

export const getTime = (unitSystem, isoTime) =>
  unitSystem == "metric"
    ? isoTime.split("T")[1]
    : timeTo12HourFormat(isoTime.split("T")[1]);

export const getAMPM = (unitSystem, isoTime) =>
  unitSystem === "imperial"
    ? isoTime.split("T")[1].split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Ancienne version (OpenWeatherMap) :
  // return weekday[
  //   new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  // ];
  // Open-Meteo donne la date du jour ("2026-10-20") dans daily.time[0].
  return weekday[new Date(weatherData.daily.time[0]).getUTCDay()];
};
