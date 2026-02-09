import { useEffect, useState } from "react";

function Analytics() {
  const [questions, setQuestions] = useState(0);
  const [uploads, setUploads] = useState(0);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    setQuestions(history.filter((i) => i.type === "question").length);
    setUploads(history.filter((i) => i.type === "upload").length);
  }, []);

  return (
    <div className="page">
      <div className="grid grid-equal">
        <div className="card-ui">
          <h3>Total Questions</h3>
          <h2>{questions}</h2>
        </div>

        <div className="card-ui">
          <h3>Total Uploads</h3>
          <h2>{uploads}</h2>
        </div>

        <div className="card-ui">
          <h3>Activity Score</h3>
          <h2>{questions + uploads}</h2>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
