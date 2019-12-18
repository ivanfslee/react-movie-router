import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        {/* creates a 'who' parameter in match obj */}
        <Route exact path="/about/:who" component={About} />

      </div>
    </Router>
  );
}

export default App;