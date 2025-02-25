import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Portfolio, Resume, Contact, Thanks } from './components';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import CookieConsent from "react-cookie-consent";

require('dotenv').config()

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
      <CookieConsent 
        enableDeclineButton 
        buttonText={'Accept'}
        declineButtonText={'Decline'}
        onAccept={() => {
          ReactGA.initialize(
            "G-R4RZ145T3T", {
              gaOptions: {
                cookie_flags: 'SameSite=none; Secure'
              }
            }
          );
        }}
        onDecline={() => {
          alert("Cookie preferences saved.");
        }}
      >
        This website uses cookies.
      </CookieConsent>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
