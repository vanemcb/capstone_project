import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/home';
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
                <ByCompany />
            </Route>
        </Router>

    );
};

export default App;
