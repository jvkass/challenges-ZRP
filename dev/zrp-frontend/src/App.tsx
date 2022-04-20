import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './hooks/useUsers';
import { Router } from './routes';
import './styles/global.scss'

export function App() {

  return (
    <UsersProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UsersProvider>
  );
}