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
                    <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>

                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0px 0px 20px 0px',
                            alignContent: 'space-between'
                        }}>
                            <p style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                fontSize: '40px'
                            }}>
                                UNDER CONSTRUCTION
                            </p>
                        </Row>
                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image src={panda} style={{ width: '400px' }}

                            />
                        </Row>
                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0px 0px 20px 0px',
                            alignContent: 'space-between'
                        }}>

                        </Row>
                    </Row>
                </Fragment>
            </div >
            <div className='fixed-bottom'>
                <FooterBar />
            </div>
        </div>
    );
};

export default GeneralInfo;