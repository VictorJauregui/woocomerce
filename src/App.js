
import { Toaster } from 'react-hot-toast';
import './App.css';
import { ToDosProvider } from './context/Context';
import { PathRoutes } from './routes/Routes';


function App() {

  return (
    <div className="App">
      <Toaster />
      <ToDosProvider >
        <PathRoutes />
      </ToDosProvider>
    </div>
  );
}

export default App;
