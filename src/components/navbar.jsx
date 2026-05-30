import { useAppContext } from "../context/AppContext";

function Navbar({ searchQuery, onSearchChange, searchRef }) {
    const { followedUsers, theme, toggleTheme } = useAppContext();

    return (
        <nav className={`navbar ${theme}`}>
        <div className="navbar-brand">
            <span className="navbar-logo">◈</span>
            <span className="navbar-title">SociaLala</span>
        </div>

        <div className="navbar-search">
            <span className="search-icon">🔎︎</span>
            <input
            ref={searchRef}
            type="text"
            className="search-input"
            placeholder="Cari nama, username, email..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
            <button className="search-clear" onClick={() => onSearchChange("")}>✕</button>
            )}
        </div>

        <div className="navbar-actions">
            <span className="follow-badge">
            {followedUsers.length} Following
            </span>
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark mode">
            {theme === "light" ? "🌙" : "☀️"}
            </button>
        </div>
        </nav>
    );
    }

export default Navbar;
