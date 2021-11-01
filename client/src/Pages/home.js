import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import { Row, Col } from "react-bootstrap";
import HomeSideBar from "../Components/home_sidebar";
import Levels from "../Components/levels";
import FreeSoloCreateOption from "../Components/searchbar";
import ToggleCompanies from "../Components/ToggleCompanies"
import { height } from "@mui/system";

const Home = () => {

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
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
                                    <Col style={{paddingLeft: 0, paddingRight: 0}}>
                                        <Levels />
                                    </Col>
                                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                                        <Levels />
                                    </Col>
                                    <Col style={{paddingLeft: 0, paddingRight: 0}}>
                                        <Levels />
                                    </Col>
                                    <Col style={{paddingLeft: 0, paddingRight: 0}} >
                                        <Levels />
                                    </Col>
                                    <Col style={{paddingLeft: 0, paddingRight: 0}}>
                                      <Levels />
                                    </Col>
                                </Row>
                            </Col >
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <FooterBar />
                </Row>
            </Fragment>
        </div>
    );
};

export default Home;