import React from 'react';

import './App.scss';
import Navbar from './components/navBar/navBar'
import List from './components/List/list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>   
      </header>
      <main>
      <div className="content">
          <List/>
      </div>
      </main>
      
     
      
       
     
    </div>
  );
}

export default App;
