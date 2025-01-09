import { useState } from 'react';
import styles from './AdminLoginModal.css';

function AdminLoginModal({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const isAuthenticated = username === 'mariamaziz0430' && password === 'msa0430';
        if (isAuthenticated) {
            onLogin(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className={styles.modal}>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLoginModal;