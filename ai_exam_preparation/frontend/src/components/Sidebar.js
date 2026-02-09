import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const Item = ({ to, label }) => (
    <Link
      to={to}
      className={
        location.pathname === to ? "menu-item active" : "menu-item"
      }
    >
      {label}
    </Link>
  );

  return (
    <div className="sidebar">
      <h3>Navigation</h3>

      <Item to="/" label="🏠 Dashboard" />
      <Item to="/ask" label="🤖 Ask AI" />
      <Item to="/history" label="🕘 History" />
      <Item to="/upload" label="📄 Upload" />
      <Item to="/weak" label="📉 Weak Areas" />
      <Item to="/analytics" label="📊 Analytics" />
      <Item to="/admin" label="👨‍💼 Admin" />
    </div>
  );
}

export default Sidebar;
