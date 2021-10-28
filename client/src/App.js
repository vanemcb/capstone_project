import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/home';
import AddSalary from './Pages/add_salary';
import ByCompany from './Pages/by_company';
import ByCompanyCharts from './Pages/by_company_charts';
import ByPositionCharts from './Pages/by_position_charts';
import PopOver from './Components/Popover';
import Navigation from './Components/navigation';


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

      <Route path="/by_company/charts/:company/:position" component={PopOver}>
        <ByCompanyCharts />
      </Route>

      <Route path="/by_position/">
        <ByPositionCharts />
      </Route>

    </Router>
    
  );
};

export default App;
