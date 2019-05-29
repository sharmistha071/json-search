import React from 'react';
import './App.css';
import Search from './new/Search';
import Menu from './new/Menu';

function App() {
  return (
    <div className="App">
      <header>
        <div>Hello react</div>
      </header>
      <section>
        <div>
          <Search />
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
