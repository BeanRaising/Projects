// App.js

import React from 'react';
import Card from './Card';

function App() {
  const cards = [1, 2, 3]; // You can adjust the number of cards here

  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Cards</h1>
        <div className="CardContainer">
          {cards.map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
