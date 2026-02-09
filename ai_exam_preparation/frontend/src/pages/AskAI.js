import { useState } from "react";

function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    setAnswer("Thinking...");

    try {
      const res = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (e) {
      setAnswer("Error connecting to backend");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask from syllabus..."
          style={{ width: "70%", padding: 10 }}
        />
        <button onClick={ask} style={{ marginLeft: 10 }}>Ask</button>
      </div>

      <div className="card">
        <h3>Answer</h3>
        <pre>{answer}</pre>
      </div>
    </div>
  );
}

export default AskAI;
