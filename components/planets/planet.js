import utilStyles from "../../styles/utils.module.css";
import styles from "./planet.module.css";
import Image from "next/image";

export default function Planet(props) {
  return (
    <div className={styles.planet}>
      <section className={styles.planetImage}>
        <center>
          <Image
            priority
            src={`/images/destination/image-${props.selected.name}.png`}
            className={utilStyles.borderCircle}
            height={300}
            width={300}
            alt=""
          />
        </center>
      </section>
      <section className={styles.planetDescription}>
        <h2>{props.selected.name}</h2>
        <p>{props.selected.description}</p>
        <hr/>
        <div className={styles.planet}>
          <div className={styles.tripDetails}>
            <p>Avg. distance</p>
            <h5>{props.selected.distance} km</h5>
          </div>
          <div className={styles.tripDetails}>
            <p>Est. travel time</p>
            <h5>{props.selected.travelTime}</h5>
          </div>
        </div>
      </section>
    </div>
  );
}
