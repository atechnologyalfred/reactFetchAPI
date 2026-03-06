import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
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
    if (id) {
      fetchOneUser();
    }
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "1.5rem" }}>Loading...</p>;
  }

  if (error) {
    return (
      <p style={{ textAlign: "center", fontSize: "1.25rem", color: "red" }}>
        {error}
      </p>
    );
  }

  if (!user) {
    return <p style={{ textAlign: "center" }}>No user found.</p>;
  }

  return (
    <div style={{ backgroundColor: "#f4f6f8" }}>
      <header>
        <h1>Welcome: {user.name}</h1>
      </header>
      <div style={{ marginTop: "3rem", backgroundColor: "#fff" }}>
        <p>I am a {user.tech} at {user.age}</p>
        <div>
          <h2>My technologies include:</h2>
          <ol>
            {user.technologies &&
              user.technologies.map((tech, idx) => <li key={idx}>{tech}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
};