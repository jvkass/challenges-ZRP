import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export function SignIn() {

    const navigate = useNavigate();

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        console.log("Logando...");
        navigate('/home');
    }

    return (
        <div className={styles.signInContainer}>
            <form className={styles.formContainer} onSubmit={handleLogin}>
                <h2>Username</h2>
                <input type="text" placeholder="Enter Username" name="uname" required></input>
                <h2>Password</h2>
                <input type="password" placeholder="Enter Password" required></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

