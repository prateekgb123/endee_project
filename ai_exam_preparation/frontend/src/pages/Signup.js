import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    if (!email) return alert("Enter email");

    // Here later backend API will be called

    alert("Account created successfully! Please login.");
    navigate("/login");   // 🔥 redirect to login instead of dashboard
  };

  return (
    <div style={center}>
      <div className="card">
        <h2>Create Account</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input placeholder="Password" type="password" style={input} />

        <button onClick={signup}>Signup</button>

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
};

const input = {
  display: "block",
  marginBottom: 10,
  padding: 10,
  width: 250,
};

export default Signup;
