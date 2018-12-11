import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ComponentAPI from './ComponentAPI';
import SearchRedirect from './SearchRedirect';

class Tutorialspoint extends Component {
   render() {
      return (
         <div>
            <h2>Tutorialspoint</h2>
              <Router>
            <div>
               <ul>
                  <li><Link to={'/tutorialspoint'}>Home</Link></li>
                  <li><Link to={'/tutorialspoint/ComponentAPI'}>Component</Link></li>
                  <li><Link to={'/tutorialspoint/SearchRedirect'}>SearchRedirect</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/tutorialspoint/ComponentAPI' component={ComponentAPI} />
                  <Route exact path='/tutorialspoint/SearchRedirect' component={SearchRedirect} />
               </Switch>
            </div>
         </Router>
         </div>
      );
   }
}
export default Tutorialspoint;