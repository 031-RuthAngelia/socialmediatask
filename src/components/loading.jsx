// Komponen LoadingSpinner: ditampilkan saat data sedang di-fetch dari API
function LoadingSpinner() {
    return (
        <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Memuat data pengguna...</p>
        </div>
    );
    }

export default LoadingSpinner;
