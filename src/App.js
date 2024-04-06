import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hwllo to My React Scrollable Page</h1>
      </header>
      <div className="Content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
        {/* Repeat this paragraph to fill the page */}
      </div>
      <footer className="Footer">
        <p>© 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
*/