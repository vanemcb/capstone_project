import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/Home';
import AddSalary from './Pages/add_salary';
import ByCompany from './Pages/by_company';


function App() {
  return (

    <Router>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/add_salary" exact>
        <AddSalary />
      </Route>

      <Route path="/by_company" exact>
        <ByCompany/>
      </Route>

      <Route path="/by_company/charts" exact>
        
      </Route>

    </Router>
    
  );
};

export default App;
