import React, { useState } from 'react';

import './App.scss';
import Navbar from './components/navBar/navBar'
import List from './components/list/list'

function App() {
  //state of cuttent tab selected by user to chose which list to render
  const [currentTab, setCurrentTab] = useState('Search')

  function tab(category){
    setCurrentTab(category)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar tabCallback={(cat) => tab(cat) }/>
          <h1 className="titleTab">{currentTab}</h1>
      </header>
      <main>
      <div className="content">
          <List tabSelected={currentTab}/>
      </div>
      </main>
    </div>
  );
}

export default App;
