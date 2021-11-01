import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import { Row, Col } from "react-bootstrap";
import SurveyButton from "../Components/survey_button";
import Levels from "../Components/levels";
import FreeSoloCreateOption from "../Components/searchbar";
import ToggleCompanies from "../Components/ToggleCompanies"
import { height } from "@mui/system";

const Home = () => {

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <Fragment >
                    <Navigation />
                    <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                        <Col className="show-grid" xs={2} md={2} style={{ width: 230 }} >
                            <Row className="mx-auto" style={{ margin: '10px 0px 30px 0px' }}>
                                <SurveyButton />
                            </Row >
                            <Row className="mx-auto">
                            </Row>
                        </Col>
                        <Col className="show-grid" xs={10} md={10} style={{ display: 'block' }}>
                            <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '10px 0px 30px 0px',
                                alignContent: 'space-between'
                            }}>
                                <ToggleCompanies />
                            </Row>
                            <Row className="show-grid" xs={10} md={10} >
                                <Col xs={1} md={1} style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    margin: '00px 00px 00px 00px',
                                    paddingLeft: 0,
                                    paddingRight: 0
                                }}>

                                </Col >
                                <Col xs={11} md={11}>
                                    <Row className="ahow-grid" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '00px 00px 00px 00px'
                                    }}>
                                        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <Levels />
                                        </Col>
                                        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <Levels />
                                        </Col>
                                        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <Levels />
                                        </Col>
                                        <Col style={{ paddingLeft: 0, paddingRight: 0 }} >
                                            <Levels />
                                        </Col>
                                    </Row>
                                </Col >
                            </Row>
                        </Col>
                    </Row>
                </Fragment>
            </div>
            <div className='fixed-bottom'>
                <FooterBar />
            </div>
        </div>
    );
};

export default Home;