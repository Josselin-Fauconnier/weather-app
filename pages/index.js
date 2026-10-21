import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
// Nettoyage recherche par texte : import du composant de recherche supprimé
// import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import { getWeatherInfo } from "../services/weatherCodes";

import styles from "../styles/Home.module.css";

export const App = () => {
  // Nettoyage recherche par texte : états de la barre de recherche supprimés
  // const [cityInput, setCityInput] = useState("Riga");
  // const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    const getData = async () => {
      // Nettoyage recherche par texte : la ville tapée n'est plus envoyée (POST),
      // elle vient du fichier de configuration,
      // const res = await fetch("api/data", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ cityInput }),
      // });
      const res = await fetch("api/data");
      const data = await res.json();
      setWeatherData({ ...data });
      // setCityInput("");
    };
    
    getData(); 
    const refreshInterval = setInterval(getData, 60 * 60 * 1000); 
    return () => clearInterval(refreshInterval); 
    // Nettoyage recherche par texte : les données ne sont plus rechargées à chaque
    // recherche, seulement au chargement de la page puis par le setInterval.
    // }, [triggerFetch]);
  }, []);

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  // Ancienne version (OpenWeatherMap) : l'erreur était signalée par "message"
  // return weatherData && !weatherData.message ? (
  return weatherData && !weatherData.error ? (
    <div className={styles.wrapper}>
      <MainCard
        // Ancienne version (OpenWeatherMap) :
        // city={weatherData.name}
        // country={weatherData.sys.country}
        // description={weatherData.weather[0].description}
        // iconName={weatherData.weather[0].icon}
        city={weatherData.city}
        country={weatherData.country}
        description={
          getWeatherInfo(
            weatherData.current.weather_code,
            weatherData.current.is_day
          ).description
        }
        iconName={
          getWeatherInfo(
            weatherData.current.weather_code,
            weatherData.current.is_day
          ).icon
        }
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
          {/* Nettoyage recherche par texte : barre de recherche supprimée
          <Search
            placeHolder="Search a city..."
            value={cityInput}
            onFocus={(e) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.target.placeholder = "Search a city...";
            }}
          />
          */}
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
    // Ancienne version (OpenWeatherMap) :
    // ) : weatherData && weatherData.message ? (
  ) : weatherData && weatherData.error ? (
    // Nettoyage recherche par texte : la ville n'est plus tapée, la barre de
    // recherche de l'écran d'erreur est supprimée.
  
    //   <Search
    //     onFocus={(e) => (e.target.value = "")}
    //     onChange={(e) => setCityInput(e.target.value)}
    //     onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
    //   />
    // </ErrorScreen>
    <ErrorScreen errorMessage="City not found, try again!" />
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
