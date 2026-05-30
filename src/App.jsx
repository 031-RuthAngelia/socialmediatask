import { useState, useEffect, useRef } from "react";
import { AppProvider, useAppContext } from "./context/AppContext";
import Navbar from "./components/navbar";
import UserCard from "./components/usercard";
import Footer from "./components/footer";
import LoadingSpinner from "./components/loading";
import "./App.css";


function AppContent() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const searchRef = useRef(null);

    const { theme, followedUsers } = useAppContext();

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Gagal mengambil data dari API");
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }};

    fetchUsers();
}, []); 

    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === "/" && document.activeElement !== searchRef.current) {
            e.preventDefault();
            searchRef.current?.focus();
        }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const filteredUsers = users.filter((user) => {
        const q = searchQuery.toLowerCase();
        const matchSearch =
        user.name.toLowerCase().includes(q) ||
        user.username.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q);
        const matchFilter =
        activeFilter === "all" ||
        (activeFilter === "following" && followedUsers.includes(user.id));
        return matchSearch && matchFilter;
    });

    return (
        <div className={`app ${theme}`}>
        <Navbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchRef={searchRef}
        />

        <main className="main-content">
            {/* Hero section */}
            <div className="hero">
            <h1 className="hero-title">Temukan Pengguna</h1>
            <p className="hero-sub">Special made for you</p>
            </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
            <button
            className={`tab ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
            >
            Semua ({users.length})
            </button>
            <button
                className={`tab ${activeFilter === "following" ? "active" : ""}`}
                onClick={() => setActiveFilter("following")}
            >
            Following ({followedUsers.length})
            </button>
        </div>

        {/* Konten utama */}
        {loading && <LoadingSpinner />}
        {error && (
            <div className="error-box">
                ⚠️ {error}
                <button onClick={() => window.location.reload()}>Coba lagi</button>
            </div>
        )}
        {!loading && !error && (
            <>
                {filteredUsers.length > 0 ? (
                <div className="user-grid">
                    {filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <p>🔍 Tidak ada pengguna ditemukan untuk "<strong>{searchQuery}</strong>"</p>
                </div>
            )}
            </>
        )}
        </main>

        <Footer totalUsers={users.length} />
        </div>
    );
}

function App() {
    return (
        <AppProvider>
        <AppContent />
        </AppProvider>
    );
}

export default App;
