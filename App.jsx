import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Tutorialspoint from './tutorialspoint/Home';
//import UdemyTech from './UdemyTech/Home'
import Redux from './UdemyTech/ReminderPro/Redux';
import Clock from './ReactJsOrg/Clock';
import Forms from './ReactJsOrg/Forms';
import Table from './ReactJsOrg/Table';
import LiftingStateUp from './ReactJsOrg/LiftingStateUp';

import Counter from './counter';
import FetchAPI from './ReactJsOrg/FetchAPI';
//import { createStore } from 'redux';
//import reducers from './reducers';

//const store = createStore(reducers);



class App extends Component {
    

   render() {
      return (
       
         <Router>
            <div>
            <div id = "date"></div>
            <Clock />
            <Counter count ="7"/>

               
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">React Workshop</a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Login'}>Login</Link></li>
                    <li className="dropdown"><Link to={'/Forms'}>Reactjs - Forms<span className="caret"></span></Link>
                              <ul className="dropdown-menu">
                                <li><Link to={'/Forms'}>Reactjs - Forms</Link></li>
                                <li><Link to={'/Table'}>Reactjs - Table</Link></li>
                                <li><Link to={'/LiftingStateUp'}>Lifting State Up</Link></li>
                                <li> <Link to={'/FetchAPI'} > FetchAPI </Link> </li>
                              </ul>
                    </li>
                    <li><Link to={'/Tutorialspoint'}>Tutorialspoint</Link></li>
                    <li className="dropdown"><Link to={'/UdemyTech'}>Udemy Tech <span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                          <li><Link to={'/UdemyTech/ReminderPro/Redux'}>ReminderPro -Redux</Link></li>
                        </ul>
                    </li>
                  </ul>
                </div>
            </nav>
            
             
             
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Forms' component={Forms} />
                  <Route exact path='/Table' component={Table} />
                  <Route  path='/FetchAPI' component = {FetchAPI} />
                  
                  <Route exact path='/LiftingStateUp' component={LiftingStateUp} />
                  <Route exact path='/tutorialspoint' component={Tutorialspoint} />
                  <Route exact path='/UdemyTech/ReminderPro/Redux' component={Redux} />
                  
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;