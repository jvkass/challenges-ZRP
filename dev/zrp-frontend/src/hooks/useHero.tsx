import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface Hero {
    id: number;
    name: string;
    rank: string;
    location: ILocation;
}

interface ILocation {
    lat: number;
    lng: number;
}

type HeroInput = Pick<Hero, 'name' | 'rank' | 'location'>;

interface HeroesProviderProps {
    children: ReactNode;
}

interface HeroesContextData {
    heroes: Hero[],
    setHeroes: React.Dispatch<React.SetStateAction<Hero[]>>,
    createHero: (hero: HeroInput) => Promise<void>;
}

export const HeroesContext = createContext<HeroesContextData>(
    {} as HeroesContextData
);

export function HeroesProvider({ children }: HeroesProviderProps) {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    async function createHero(heroInput: HeroInput) {
        const response = await api.post('/heroes', {
            ...heroInput, createdAt: new Date(),
        })

        const { hero } = response.data;

        setHeroes([
            ...heroes,
            hero,
        ]);
    }

    return (
        <HeroesContext.Provider value={{ heroes, setHeroes, createHero }}>
            {children}
        </HeroesContext.Provider>
    );
}

export function useHero() {
    const context = useContext(HeroesContext);

    return context;
}