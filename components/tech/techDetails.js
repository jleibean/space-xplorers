import utilStyles from "../../styles/utils.module.css";
import styles from "./techDetails.module.css";

export default function TechDetails(props) {
    console.log(props.selected)
  return (
    <div>
      <section>
        <p className={styles.heading}>The Terminology...</p>
        <h3>{props.selected.name}</h3>
        <p>{props.selected.description}</p>
        </section>
    </div>
  );
}
