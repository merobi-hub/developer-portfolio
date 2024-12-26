import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Portfolio, Resume, Contact, Thanks } from './components';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

// dotenv
require('dotenv').config()
console.log(process.env) // remove this after you've

ReactGA.initialize(
  "G-R4RZ145T3T", {
    gaOptions: {cookie_flags: 'SameSite=none; Secure'}
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title={'Michael Robinson'} />
        </Route>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/thanks' component={Thanks} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
