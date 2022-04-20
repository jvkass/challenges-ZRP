import { BrowserRouter } from 'react-router-dom';
import { HeroesProvider } from './hooks/useHero';
import { UsersProvider } from './hooks/useUsers';
import { Router } from './routes';
import './styles/global.scss'

export function App() {

  return (
    <UsersProvider>
      <HeroesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HeroesProvider>
    </UsersProvider>
  );
}