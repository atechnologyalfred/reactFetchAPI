import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./EachUser.module.css";

export const EachUser = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function fetchOneUser() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://fetchapi-o5nd.onrender.com/user/${id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load user");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) fetchOneUser();
  }, [id]);

  if (loading) return <p className={styles.center}>Loading...</p>;

  if (error) return <p className={styles.error}>{error}</p>;

  if (!user) return <p className={styles.center}>No user found.</p>;

  return (
    <div className={styles.container}>
      
      <Link to="/" className={styles.backBtn}>⬅ Back Home</Link>

      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.role}>{user.tech}</p>
        </header>

        <div className={styles.info}>
          <p>I am {user.age} years old.</p>
        </div>

        <div className={styles.techSection}>
          <h2 className={styles.techTitle}>Technologies I Use</h2>

          <ul className={styles.list}>
            {user.technologies &&
              user.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
          </ul>
        </div>
      </div>

    </div>
  );
};