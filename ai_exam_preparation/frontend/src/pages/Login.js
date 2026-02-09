import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const login = () => {
  const { username, email, password } = form;

  if (!username || !email || !password) {
    return alert("Please fill all fields");
  }

  const savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    return alert("No account found. Please signup.");
  }

  if (
    savedUser.username === username &&
    savedUser.email === email &&
    savedUser.password === password
  ) {
    localStorage.setItem("user", username);
    navigate("/");
    window.location.reload();
  } else {
    alert("Invalid credentials ❌");
  }
};


  return (
    <div style={center}>
      <div style={card}>
        <h2 style={title}>Welcome Back 👋</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={input}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={input}
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          style={input}
        />

        <button onClick={login} style={button}>
          Login
        </button>

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
  background: "linear-gradient(135deg,#667eea,#764ba2)",
};

const card = {
  background: "#fff",
  padding: 30,
  borderRadius: 10,
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const title = {
  marginBottom: 20,
};

const input = {
  display: "block",
  marginBottom: 12,
  padding: 12,
  width: 250,
  borderRadius: 5,
  border: "1px solid #ddd",
};

const button = {
  padding: 12,
  width: "100%",
  background: "#667eea",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;
