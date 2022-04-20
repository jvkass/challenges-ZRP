import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import './styles/global.scss'

export function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}