import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ borderBottom: "1px solid #333", padding: "10px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Turium AI Assignment Knowledge Inbox</h2>
        <nav>
          <Link to="/" style={{ marginRight: 36 }}>Home</Link>
          <Link to="/items">View Saved Content</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
