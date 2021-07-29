import Modal from 'react-modal'
import { AppContextProvider } from './_context/appContext'
import Routes from './routes'
import  './styles/global.scss';

Modal.setAppElement('#root');

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
