import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home';
import Movie from './Movie';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        {/*creates a 'who' parameter in match obj */}
        {/* this one route provides Movie component a bunch of react router props which are obj like match/history/location */}
        <Route exact path="/movie/:movieId" component={Movie} />
      </div>
    </Router>
  );
}

export default App;