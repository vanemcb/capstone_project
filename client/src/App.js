import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/home';
import AddSalary from './Pages/add_salary';
import Graphics from './Pages/graphics';
import GeneralInfo from './Pages/general_info';
import InProcess from './Pages/in_process';
import LogIn from './Pages/log_in';

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

            <Route path="/general_info" exact>
                <GeneralInfo />
            </Route>

            <Route path="/in_process" exact>
                <InProcess />
            </Route>

            <Route path="/log_in" exact>
                <LogIn />
            </Route>

        </Router>

    );
};

export default App;
