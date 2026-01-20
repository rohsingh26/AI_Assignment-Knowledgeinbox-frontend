import { useState } from "react";
import { queryKnowledge } from "../api/queryApi";
import Spinner from "../components/Spinner";
import AnswerBox from "../components/AnswerBox";
import SourcesTable from "../components/SourcesTable";
import IngestForm from "../components/IngestForm";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);

  const handleAsk = async () => {
    setLoading(true);
    setAnswer("");
    setSources([]);

    try {
      const res = await queryKnowledge(question);
      setAnswer(res.answer);
      setSources(res.sources || []);
    } catch {
      setAnswer("Something went wrong while querying.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <h3>Ask a Question</h3>

        <div className="card">
          <input
            placeholder="Ask your question..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />

          <button
            style={{ marginTop: 12 }}
            onClick={handleAsk}
            disabled={loading || !question}
          >
            Ask
          </button>

          {loading && <Spinner />}
        </div>
      </section>

      <AnswerBox answer={answer} />
      <SourcesTable sources={sources} />

      <IngestForm />
    </>
  );
};

export default Home;
