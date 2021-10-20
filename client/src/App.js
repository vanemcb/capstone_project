import React, { Fragment } from 'react';
import './App.css';

// components
import Survey from './Components/survey'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Survey />
      </div>
    </Fragment>
  );
};

// class App extends Component {

//     state = {
//         filled_survey: filled_survey
//     }

//     addSurvey = (new_survey) => {
//         filled_survey.push(new_survey)
//         console.log(new_survey)
//         console.log(filled_survey)
//     }

//     render() {
//         return <div>
//             <Survey addSurvey={this.addSurvey} />
//         </div >
//     }
// }

export default App;
