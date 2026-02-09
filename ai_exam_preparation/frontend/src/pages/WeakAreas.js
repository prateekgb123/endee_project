import { useEffect, useState } from "react";

function WeakAreas() {
  const [weak, setWeak] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    const map = {};

    history.forEach((item) => {
      if (item.type === "question") {
        const key = item.text.split(" ")[0]; // simple keyword logic
        map[key] = (map[key] || 0) + 1;
      }
    });

    const sorted = Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    setWeak(sorted);
  }, []);

  return (
    <div className="page">
      <div className="card-ui" style={{ maxWidth: 700 }}>
        <h2>📉 Your Weak Areas</h2>

        {weak.length === 0 ? (
          <p>No data yet. Ask more questions.</p>
        ) : (
          <ul className="clean-list">
            {weak.map(([topic, count], i) => (
              <li key={i}>
                {topic} → asked {count} times
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WeakAreas;
