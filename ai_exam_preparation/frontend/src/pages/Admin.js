import { useEffect, useState } from "react";

function Admin() {
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState(0);
  const [uploads, setUploads] = useState(0);
  const [last, setLast] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    setEmail(user || "Unknown");

    const history = JSON.parse(localStorage.getItem("history")) || [];

    const q = history.filter((i) => i.type === "question");
    const u = history.filter((i) => i.type === "upload");

    setQuestions(q.length);
    setUploads(u.length);

    if (history.length) {
      setLast(history[0].time);
    }
  }, []);

  const clearHistory = () => {
    if (window.confirm("Clear all history?")) {
      localStorage.removeItem("history");
      alert("History cleared");
      window.location.reload();
    }
  };

  const resetAccount = () => {
    if (window.confirm("Reset complete account?")) {
      localStorage.clear();
      window.location.href = "/login";
    }
  };

  const exportHistory = () => {
    const data = localStorage.getItem("history") || "[]";
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "history.json";
    a.click();
  };

  return (
    <div className="page">
      <div className="grid grid-equal">
        {/* USER INFO */}
        <div className="card-ui">
          <h3>👤 User Info</h3>
          <p><b>Email:</b> {email}</p>
          <p><b>Last Activity:</b> {last || "None"}</p>
        </div>

        {/* STATS */}
        <div className="card-ui">
          <h3>📊 Usage</h3>
          <p><b>Questions Asked:</b> {questions}</p>
          <p><b>Files Uploaded:</b> {uploads}</p>
          <p><b>Total Actions:</b> {questions + uploads}</p>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="card-ui" style={{ marginTop: 20, maxWidth: 600 }}>
        <h3>🛠 Admin Controls</h3>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={exportHistory}>
            Export History
          </button>

          <button className="btn-primary" onClick={clearHistory}>
            Clear History
          </button>

          <button
            onClick={resetAccount}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reset Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
