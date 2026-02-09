import { Link } from "react-router-dom";

function Sidebar() {
  const style = { display: "block", margin: "12px 0", color: "white" };

  return (
    <div style={{
      width: 220,
      background: "#0f172a",
      padding: 20,
      minHeight: "100vh",
      borderRight: "1px solid #334155"
    }}>
      <h3>Navigation</h3>

      <Link to="/" style={style}>🏠 Dashboard</Link>
      <Link to="/ask" style={style}>🤖 Ask AI</Link>
      <Link to="/history" style={style}>🕘 History</Link>
      <Link to="/upload" style={style}>📄 Upload</Link>
      <Link to="/weak" style={style}>📉 Weak Areas</Link>
      <Link to="/analytics" style={style}>📊 Analytics</Link>
      <Link to="/admin" style={style}>🧑‍💼 Admin</Link>
      <Link to="/login" style={style}>🔐 Login</Link>
    </div>
  );
}

export default Sidebar;
