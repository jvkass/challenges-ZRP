import styles from './styles.module.scss';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="zrp" />
                <nav>
                    <Link className='' to='/home'>Home</Link>
                </nav>

                <label>Seja bem vindo, name</label>
            </div>
        </header>
    );
}