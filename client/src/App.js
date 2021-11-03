import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/home';
import AddSalary from './Pages/add_salary';
import Graphics from './Pages/charts';
import GeneralInfo from './Pages/general_info';
import InProcess from './Pages/in_process';


function App() {
    return (

        <Router>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/add_salary" exact>
                <AddSalary />
            </Route>

        <Route path="/charts" exact>
                <Graphics />
            </Route>

            <Route path="/general_info" exact>
                <GeneralInfo />
            </Route>

            <Route path="/in_process" exact>
                <InProcess />
            </Route>


        </Router>

    );
};

export default App;
