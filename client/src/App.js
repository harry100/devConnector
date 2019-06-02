import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path='/' exact component={Landing} />
        <div className="container">
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
