import { SocketProvider } from './context/SocketContent';
import { RoutesApp } from './routes/routes';
import './styles/index.css';

function App() {
  return (
    <SocketProvider>
      <RoutesApp />
    </SocketProvider>
  );
}

export default App;
