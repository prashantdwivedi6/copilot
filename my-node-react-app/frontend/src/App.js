import React from 'react';
import './styles/App.css';
import ExampleComponent from './components/ExampleComponent';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Node-React App</h1>
      <ExampleComponent />
      <ProductComponent />
    </div>
  );
}

export default App;