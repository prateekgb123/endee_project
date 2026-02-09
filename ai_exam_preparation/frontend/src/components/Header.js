function Header() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div style={{
      padding: "15px 25px",
      background: "#0f172a",
      borderBottom: "1px solid #334155",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <b>🎓 Endee AI Study Copilot</b>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;
