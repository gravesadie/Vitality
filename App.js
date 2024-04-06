import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Scrollable Page</h1>
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