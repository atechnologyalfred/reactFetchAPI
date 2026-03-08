import { Link } from "react-router-dom";
import styles from "./List.module.css";

function List({ name, age, tech, gender, technologies: techs, id }) {
  return (
    <Link to={`/user/${id}`} className={styles.link}>
      <li className={styles.card}>
        <h1 className={styles.name}>
          {name} ({gender})
        </h1>

        <div className={styles.info}>
          <span>
            {tech} @ {age}
          </span>

          <div className={styles.techRow}>
            Technologies:
            {techs.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </li>
    </Link>
  );
}

export default List;