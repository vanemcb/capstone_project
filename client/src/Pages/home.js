import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import ListLevels from "../Components/ListLevels";
import { Row, Col } from "react-bootstrap";
import HomeSideBar from "../Components/home_sidebar";
import ListCompanies from "../Components/ListCompanies";
import Levels from "../Components/levels";
import Grid from '@mui/material/Grid';


import FreeSoloCreateOption from "../Components/searchbar";
import ToggleCompanies from "../Components/ToggleCompanies"



const Home = () => {

    return (
        <div style={{ height: '100vh' }}>
            <Fragment >
                <Navigation />
                <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                    <Col xs={2} md={2} style={{ display: 'flex' }}>
                        <HomeSideBar />
                    </Col>
                    <Col className="show-grid" xs={10} md={10} style={{ display: 'block' }}>
                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '-20px 10px 30px 10px',
                            alignContent: 'space-between'
                        }}>
                          <ToggleCompanies />
                        </Row>
                        <Row className="show-grid" xs={10} md={10} >
                            <Col xs={1} md={1} style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '00px 00px 00px 00px',
                                alignContent: 'space-between'
                            }}>
                                <Levels />
                            </Col >
                            <Col xs={11} md={11}>
                                <Row className="ahow-grid" style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    margin: '00px 00px 00px 00px',
                                    alignContent: 'space-between'
                                }}>
                                    <Col  >
                                        <Levels />
                                    </Col>
                                    <Col >
                                        <Levels />
                                    </Col>
                                    <Col>
                                        <Levels />
                                    </Col>
                                    <Col >
                                        <Levels />
                                    </Col>
                                    <Col >
                                        <Levels />
                                    </Col>

                                </Row>
                            </Col >
                        </Row>
                    </Col>
                </Row>
            </Fragment>
            <FooterBar className="sticky-bottom" />
        </div>
    );
};

export default Home;