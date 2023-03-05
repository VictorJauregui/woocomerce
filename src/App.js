
import './App.css';
import Context from './context/Context';
import PathRoutes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <Context >
        <PathRoutes />
      </Context>
    </div>
  );
}

export default App;
