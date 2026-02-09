import { useState } from "react";

function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    try {
      setLoading(true);
      setAnswer("Thinking...");

      const res = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);

      // ✅ Save to history ONLY if success
      if (res.ok) {
        const history = JSON.parse(localStorage.getItem("history")) || [];

        history.unshift({
          type: "question",
          text: question,
          time: new Date().toLocaleString(),
        });

        localStorage.setItem("history", JSON.stringify(history));
      }

      // clear input after ask
      setQuestion("");
    } catch (e) {
      setAnswer("❌ Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      {/* hero */}
      <div className="ask-hero">
        <h1>Ask AI 🤖</h1>
        <p>Ask anything from your uploaded materials.</p>
      </div>

      {/* input */}
      <div className="ask-input-card">
        <input
          className="ask-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask from syllabus..."
        />
        <button className="ask-btn" onClick={ask} disabled={loading}>
          {loading ? "Asking..." : "Ask"}
        </button>
      </div>

      {/* answer */}
      <div className="ask-answer-card">
        <h3>Answer</h3>
        <div className="ask-answer">{answer}</div>
      </div>
    </div>
  );
}

export default AskAI;
