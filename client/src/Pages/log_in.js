import React, { Fragment, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import SurveyButton from "../Components/survey_button"
import panda from '../Components/images/panda.png'



const GeneralInfo = () => {
    return (
        <div>
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <Fragment>
                    <Navigation />
                    
                </Fragment>
            </div >
            <div className='fixed-bottom'>
                <FooterBar />
            </div>
        </div>
    );
};

export default GeneralInfo;