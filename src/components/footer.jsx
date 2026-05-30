import { useAppContext } from "../context/AppContext";

function Footer({ totalUsers }) {
    const { followedUsers, theme } = useAppContext();

    return (
        <footer className={`footer ${theme}`}>
        <div className="footer-content">
            <div className="footer-brand">
            <span className="footer-logo">◈</span>
            <span className="footer-name">SociaLala</span>
            </div>
            <div className="footer-stats">
            <span> {totalUsers} Pengguna</span>
            <span> {followedUsers.length} Diikuti</span>
            </div>
            <p className="footer-credit">
            Data dari{" "}
            <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
                JSONPlaceholder API
            </a>{" "}
            · Dibuat dengan React 
            </p>
        </div>
        </footer>
    );
}

export default Footer;
