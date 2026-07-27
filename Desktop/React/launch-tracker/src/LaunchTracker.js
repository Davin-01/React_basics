import { useState, useEffect } from "react";

const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches";

function LaunchTracker() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SPACEX_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }
        return response.json();
      })
      .then((data) => {
        setLaunches(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>SpaceX Launch Tracker</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            <h2>{launch.name}</h2>

            <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>

            <p>Details: {launch.details || "No details available"}</p>

            {launch.links.webcast && (
              <a
                href={launch.links.webcast}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Launch
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchTracker;
