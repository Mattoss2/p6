import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation */}
          <nav>
            <Link to="/" style={{ marginRight: '20px' }}>Accueil</Link>
            <Link to="/about">À propos</Link>
          </nav>
          
          {/* Routes */}
          <Switch>
            <Route exact path="/">
              {/* Contenu de la page d'accueil */}
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Route>

            <Route path="/about">
              {/* Contenu de la page À propos */}
              <p>Page À propos</p>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;