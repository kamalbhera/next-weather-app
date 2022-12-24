import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";
import {useState} from 'react'
export const MetricsBox = ({ weatherData, unitSystem }) => {
  const [imageSize, setSmageSize] = useState({
    width: 1,
    height: 1
   });
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.main.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.wind.deg)}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        layout="fill"
        objectFit="contain"
        metric={getTime(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        onLoadingComplete={target => {
          setSmageSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          });
        }}
        width={imageSize.width}
        height={imageSize.height}
      />
      <MetricsCard
        title={"Sunset"}
        layout="fill"
        objectFit="contain"
        iconSrc={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.sys.sunset,
          weatherData.timezone
        )}
        unit={getAMPM(unitSystem, weatherData.sys.sunset, weatherData.timezone)}
      />
    </div>
  );
};
