const SourcesTable = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="card">
      <h3>Sources</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sources.map(src => (
            <tr key={src.id}>
              <td>{src.id}</td>
              <td>{src.content}</td>
              <td>{src.score.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SourcesTable;
