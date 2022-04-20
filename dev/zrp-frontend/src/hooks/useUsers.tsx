import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

type LoginUserInput = Pick<User, 'username' | 'password'>;

interface UsersProviderProps {
    children: ReactNode;
}

interface UsersContextData {
    loggedUser: User | undefined,
    loggedToken: string,
    loginUser: (user: LoginUserInput) => Promise<void>,
}

export const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
    const [loggedUser, setLoggedUser] = useState<User>();
    const [loggedToken, setLoggedToken] = useState<string>('');

    async function loginUser(loginUserInput: LoginUserInput) {
        const response = await api.post('sessions/', {
            ...loginUserInput,
        })

        const { token, user } = response.data;

        setLoggedToken(
            token
        );

        setLoggedUser(
            user
        );
    }

    return (
        <UsersContext.Provider value={{ loggedUser, loggedToken, loginUser }}>
            {children}
        </UsersContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UsersContext);

    return context;
}