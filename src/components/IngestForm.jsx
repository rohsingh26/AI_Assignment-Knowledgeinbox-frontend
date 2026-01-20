import { useState } from "react";
import { ingestContent } from "../api/ingestApi";

const IngestForm = () => {
  const [type, setType] = useState("text");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await ingestContent({ type, content, title });
      setMessage("✅ Content ingested successfully");
      setContent("");
      setTitle("");
    } catch {
      setMessage("❌ Failed to ingest content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h3>Add / Ingest Data</h3>

      <form onSubmit={handleSubmit} className="card">
        <label>Content Type</label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="url">URL</option>
        </select>

        <label style={{ marginTop: 8 }}>
          {type === "url" ? "URL" : "Text Content"}
        </label>
        <textarea
          rows={4}
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />

        <label style={{ marginTop: 8 }}>Title (optional)</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <button style={{ marginTop: 12 }} disabled={loading}>
          {loading ? "Ingesting..." : "Ingest Content"}
        </button>

        {message && <p style={{ marginTop: 8 }}>{message}</p>}
      </form>
    </section>
  );
};

export default IngestForm;
