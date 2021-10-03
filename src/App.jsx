import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import { Contexts } from './Contexts';

function App() {
  return (
    <div className="App">
      <Router>
        <Contexts>
          <Routes />
        </Contexts>
      </Router>
    </div>
  );
}

export default App;
