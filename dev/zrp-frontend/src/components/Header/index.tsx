import styles from './styles.module.scss';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUsers';

export function Header() {
    const {loggedUser} = useUser();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="zrp" />
                <nav>
                    <Link className='' to='/home'>Home</Link>
                    <Link className='' to='/hero'>Hero</Link>
                </nav>

                <label>Seja bem vindo, {loggedUser?.name}</label>
            </div>
        </header>
    );
}