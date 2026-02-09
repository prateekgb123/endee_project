function Dashboard() {
  return (
    <div className="page">
      {/* HERO */}
      <div className="dashboard-hero">
        <div>
          <h1>Welcome back 👋</h1>
          <p>Ready to continue your preparation?</p>
        </div>

        <div className="hero-badges">
          <span className="badge">🔥 Keep Learning</span>
          <span className="badge">🚀 Stay Consistent</span>
        </div>
      </div>

      {/* GRID */}
      <div className="dashboard-grid">
        {/* Focus */}
        <div className="dashboard-card focus">
          <h3>📚 Today's Focus</h3>
          <ul>
            <li>Deadlocks</li>
            <li>Normalization</li>
            <li>Binary Trees</li>
          </ul>
        </div>

        {/* Progress */}
        <div className="dashboard-card progress">
          <h3>📈 Your Progress</h3>

          <div className="progress-stats">
            <div className="stat">
              <h2>7</h2>
              <p>Questions Today</p>
            </div>

            <div className="stat">
              <h2>3</h2>
              <p>Topics Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
