import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("notes");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const uploadFile = async () => {
    if (!file) {
      setMessage("❌ Please choose a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      await res.json();

      if (res.ok) {
        // ✅ save to history
        const history = JSON.parse(localStorage.getItem("history")) || [];

        history.unshift({
          type: "upload",
          text: file.name,
          category,
          time: new Date().toLocaleString(),
        });

        localStorage.setItem("history", JSON.stringify(history));

        // ✅ success message
        setMessage(
          "✅ Uploaded successfully! You can now ask questions from this file. Redirecting..."
        );

        // ✅ redirect after small delay
        setTimeout(() => {
          navigate("/ask");
        }, 1500);
      } else {
        setMessage("❌ Upload failed");
      }
    } catch (err) {
      setMessage("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card-ui" style={{ maxWidth: 720 }}>
        <h2>📄 Upload Study Material</h2>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="notes">Notes</option>
            <option value="syllabus">Syllabus</option>
            <option value="pyq">Previous Questions</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        {/* File */}
        <div className="file-upload">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {file && (
          <p className="file-name">
            📎 Selected: <b>{file.name}</b>
          </p>
        )}

        {/* Button */}
        <button
          className="btn-primary upload-btn"
          onClick={uploadFile}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload to AI"}
        </button>

        {/* Message */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Upload;
