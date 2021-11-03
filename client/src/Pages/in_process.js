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
                                fontSize: '70px',
                                fontFamily: 'verdana'
                            }}>
                                UNDER CONSTRUCTION
                            </p>
                        </Row>
                        <Row >
                            <Col style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0px 0px 0px 100px'
                            }}>
                                <Image src={panda} style={{ width: '400px' }} />
                            </Col>
                            <Col style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image src={panda} style={{ width: '400px' }} />
                            </Col>
                            <Col style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0px 100px 0px 0px'
                            }}>
                                <Image src={panda} style={{ width: '400px' }} />
                            </Col>
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