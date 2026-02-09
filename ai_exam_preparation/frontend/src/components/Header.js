import logo from "../assets/endee.jpg";

function Header() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="app-header">
      <div className="header-left">
        <img src={logo} alt="logo" className="app-logo" />
        <h2 className="app-title">Endee AI Study Copilot</h2>
      </div>

      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Header;
