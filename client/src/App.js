import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/home';
import AddSalary from './Pages/add_salary';
import Graphics from './Pages/graphics';
import GeneralInfo from './Pages/general_info';

function App() {
    return (

        <Router>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/add_salary" exact>
                <AddSalary />
            </Route>

        <Route path="/graphics" exact>
                <Graphics />
            </Route>

        <Route path="/general_info/" exact>
                <GeneralInfo />
            </Route>

        </Router>

    );
};

export default App;
