
import './App.css';
import { ToDosProvider } from './context/Context';
import { PathRoutes } from './routes/Routes';
import {useFirebaseApp} from 'reactfire'


function App() {

  return (
    <div className="App">
      <ToDosProvider >
        <PathRoutes />
      </ToDosProvider>
    </div>
  );
}

export default App;
