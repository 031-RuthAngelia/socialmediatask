import { useState } from "react";
import { useAppContext } from "../context/AppContext";


function UserCard({ user }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 300) + 50);

    const { followedUsers, toggleFollow, theme } = useAppContext();
    const isFollowed = followedUsers.includes(user.id);

    const handleLike = () => {
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    const initials = user.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className={`user-card ${theme} ${isFollowed ? "followed" : ""}`}>
        <div className="card-header">
            <div className="avatar" style={{ background: stringToColor(user.name) }}>
            {initials}
            </div>
            {isFollowed && <span className="following-tag">✓ Following</span>}
        </div>

        {/* Info User */}
        <div className="card-body">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-username">@{user.username}</p>
            <p className="user-email">✉ {user.email}</p>
            <p className="user-company">🏢 {user.company.name}</p>
            <p className="user-city">📍 {user.address.city}</p>
        </div>

        {/* Tombol Aksi */}
        <div className="card-actions">
            <button
            className={`btn-like ${liked ? "active" : ""}`}
            onClick={handleLike}
            >
            {liked ? "❤️" : "🤍"} {likeCount}
            </button>
            <button
            className={`btn-follow ${isFollowed ? "active" : ""}`}
            onClick={() => toggleFollow(user.id)}
            >
            {isFollowed ? "✓ Followed" : "+ Follow"}
            </button>
        </div>
        </div>
    );
}


function stringToColor(str) {
    const colors = [
        "#FF6B6B","#FF8E53","#FFC947","#06D6A0",
        "#118AB2","#7B2FBE","#F72585","#4CC9F0",
        "#3A86FF","#FF006E",
    ];
    let hash = 0;
    for (let c of str) hash = c.charCodeAt(0) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
}

export default UserCard;
