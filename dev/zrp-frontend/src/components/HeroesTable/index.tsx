import { useEffect } from "react";
import { useHero } from "../../hooks/useHero";
import { useUser } from "../../hooks/useUsers";
import { api } from "../../services/api";
import styles from './styles.module.scss';

export function HeroesTable() {

    const { heroes, setHeroes } = useHero();

    const { loggedToken } = useUser();

    console.log('antes do useEffect', heroes);

    useEffect(() => {
        api.get("heroes", { headers: { "Authorization": `Bearer ${loggedToken}` } })
            .then(response => setHeroes(response.data.heroes))

    }, [setHeroes, loggedToken])

    console.log('depois do useEffect', heroes);
    heroes.map(hero => (
        console.log(JSON.stringify(hero.location.lat))
    ))
    return (
        <div className={styles.heroTableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>rank</th>
                        <th>location</th>
                    </tr>
                </thead>

                <tbody>
                    {heroes.map(hero => (
                        <tr key={hero.id}>
                            <td className="name">{hero.name}</td>
                            <td className="rank">{hero.rank}</td>
                            <td className="location">{hero.location.lat};{hero.location.lng}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}