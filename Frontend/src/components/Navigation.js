import { Link } from "react-router-dom";

export default function Navigation() {
  const navStyle = {
    backgroundColor: "#a6baf7",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#000",
  };

  const linkHoverStyle = {
    ...linkStyle,
    ":hover": {
      color: "#007BFF", // Change color on hover (works with some CSS-in-JS libraries)
    },
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/add-player" style={linkStyle}>
        Add Player
      </Link>
      <Link to="/team-statistics" style={linkStyle}>
        Team Statistics
      </Link>
      <Link to="/top-players" style={linkStyle}>
        Top 5 Players
      </Link>
      <Link to="/retrieve-matches-by-date" style={linkStyle}>
        Retrieve Matches By Date
      </Link>
    </nav>
  );
}
