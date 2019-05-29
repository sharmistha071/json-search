import React from 'react';
import './App.css';
import Search from './components/Search';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <section>
        <div>
          <span>Search Here</span><Search />
        </div>
      </section>
      <section>
        <div>
          <Menu />
        </div>
      </section> 
    </div>
  );
}

export default App;
