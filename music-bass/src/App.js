import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocalCard from './components/Card';
import SiteNav from './components/Navbar';

function App() {
  

  return (
    <div className="App">
      <LocalCard />
      <SiteNav />
    </div>
  );
}


export default App;
