import utilStyles from "../../styles/utils.module.css";
import styles from "./crewDetails.module.css";
import Image from "next/image";

export default function CrewDetails(props) {
  return (
    <div className={styles.crew}>
      <section className={styles.crewDescription}>
        <h5>{props.selected.title}</h5>
        <h3>{props.selected.name}</h3>
        <p>{props.selected.description}</p>
      </section>
    </div>
  );
}