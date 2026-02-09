import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const signup = () => {
  const { username, email, password, confirmPassword } = form;

  if (!username || !email || !password || !confirmPassword) {
    return alert("Please fill all fields");
  }

  if (password !== confirmPassword) {
    return alert("Passwords do not match");
  }

  // Save in localStorage
  const userData = { username, email, password };
  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Account created successfully! Please login.");
  navigate("/login");
};


  return (
    <div style={center}>
      <div style={card}>
        <h2 style={title}>Create Account 🚀</h2>

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

        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          style={input}
        />

        <button onClick={signup} style={button}>
          Signup
        </button>

        <p style={{ marginTop: 15 }}>
          Already have account? <Link to="/login">Login</Link>
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

export default Signup;
