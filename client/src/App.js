import React, { Component } from 'react';
import './App.css';

// sample dictionary
import filled_survey from './Sample/filled_survey.json'

// components
import Survey from './Components/survey'

class App extends Component {

    state = {
        filled_survey: filled_survey
    }

    addSurvey = (new_survey) => {
        filled_survey.push(new_survey)
        console.log(new_survey)
        console.log(filled_survey)
    }

    render() {
        return <div>
            <Survey addSurvey={this.addSurvey} />
        </div >
    }
}

export default App;
