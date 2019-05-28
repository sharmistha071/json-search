import React from 'react';
import './App.css';
import Search from './Search';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header>
        <div>Hello react</div>
      </header>
      <section>
        <div>
          {/*<Search />*/}
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
