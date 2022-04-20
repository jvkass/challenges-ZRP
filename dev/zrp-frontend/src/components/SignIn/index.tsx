import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUsers';
import styles from './styles.module.scss';

export function SignIn() {

    const { loginUser } = useUser();

    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        await loginUser({
            username,
            password
        })

        console.log("Logando...");
        navigate('/home');
    }

    return (
        <div className={styles.signInContainer}>
            <form className={styles.formContainer} onSubmit={handleLogin}>
                <h2>Username</h2>
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter Username" name="uname" required></input>
                <h2>Password</h2>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password" required></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

