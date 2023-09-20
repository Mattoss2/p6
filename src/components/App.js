import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />  {/* Ajout du composant Header ici */}

        {/* Routes */}
        <Routes>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;