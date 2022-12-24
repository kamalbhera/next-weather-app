import Image from "next/image";
import styles from "./MetricsCard.module.css";

export const MetricsCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.content}>
        <Image layout="responsive"
          objectFit="cover"
          src={iconSrc}
          width={6}
          height={4}
          alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};
