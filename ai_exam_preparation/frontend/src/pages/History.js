import { useEffect, useState } from "react";

function History() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setItems(data);
  }, []);

  return (
    <div className="page">
      <div className="card-ui" style={{ maxWidth: 800 }}>
        <h2>🕘 Previous Activity</h2>

        {items.length === 0 ? (
          <p>No activity yet.</p>
        ) : (
          <ul className="clean-list">
            {items.map((item, index) => (
              <li key={index}>
                {item.type === "question" ? "❓" : "📄"} {item.text}
                <br />
                <small style={{ color: "#64748b" }}>{item.time}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default History;
