import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/home';
import AddSalary from './Pages/add_salary';
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

        <Route path="/by_company">
                <ByCompanyCharts />
            </Route>

        <Route path="/by_position/" exact>
                <ByPositionCharts />
            </Route>

        </Router>

    );
};

export default App;
