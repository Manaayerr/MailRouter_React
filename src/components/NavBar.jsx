import{Link} from "react-router-dom"

function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>📬 Mailboxes</h2>
      <div className="nav-links">
        <Link to="/mailboxes">Home</Link>
        <Link to="/new">New Mailbox</Link>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar