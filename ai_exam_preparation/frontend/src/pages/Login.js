import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (!email) return alert("Enter email");

    // fake login
    localStorage.setItem("user", email);
    navigate("/");
    window.location.reload();
  };

  return (
    <div style={center}>
      <div className="card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input placeholder="Password" type="password" style={input} />

        <button onClick={login}>Login</button>

        <p style={{ marginTop: 15 }}>
          No account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

const center = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const input = {
  display: "block",
  marginBottom: 10,
  padding: 10,
  width: 250,
};

export default Login;
