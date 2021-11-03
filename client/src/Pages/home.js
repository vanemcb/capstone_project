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
    const level = ["L0", "L1", "L2", "L3", "L4", "L5"];

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

                                <Col xs={12} md={12}>
                                    <Row className="show-grid" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '00px 100px 00px 100px'
                                    }}>
                                        <Col xs={1} md={1} style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            margin: '00px 00px 00px 00px',
                                            paddingLeft: 0,
                                            paddingRight: 0
                                        }}>
                                            <ul className="list-group text-center" style={{ width: '100%', margin: '00px 00px 0px 00px' }}>
                                                <li className="list-group-item active" style={{
                                                    background: "#DEE0E6",
                                                    color: "black",
                                                    borderColor: "white",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'flex'
                                                }}>
                                                    Levels
                                                </li>
                                                {level.map(value => (
                                                    <li className="list-group-item" style={{
                                                        height: '60px',
                                                        background: "#DEE0E6",
                                                        borderColor: "white",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        display: 'flex'
                                                    }}>
                                                        {value}
                                                    </li>
                                                ))}

                                            </ul>
                                        </Col >
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