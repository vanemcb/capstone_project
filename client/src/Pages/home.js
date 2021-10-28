import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import ListLevels from "../Components/ListLevels";
import { Row, Col } from "react-bootstrap";
import HomeSideBar from "../Components/home_sidebar";
import ListCompanies from "../Components/ListCompanies";
import Levels from "../Components/levels";
import FreeSoloCreateOption from "../Components/searchbar";

const Home = () => {

    return (
        <Fragment>
            <Navigation />
            <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                <Col xs={2} md={2} style={{ display: 'flex' }}>
                    <HomeSideBar />
                </Col>
                <Col className="show-grid" xs={10} md={10}>
                    <Row style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        maxHeight: '400px',
                        margin: '-20px 10px 30px 10px',
                        alignContent: 'space-between'
                    }}>
                        <ListCompanies />
                    </Row>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <Levels />
                        </Col>
                        <Col xs={3} md={3}>
                            <ListLevels nameCompany="PANDEV"/>
                        </Col>
                        <Col xs={3} md={3}>
                            <ListLevels nameCompany="Mercado Libre"/>
                        </Col>
                        <Col xs={3} md={3}>
                            <ListLevels nameCompany="Actualiza"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <FooterBar style={{ display: 'flex' }} sticky="bottom" />
        </Fragment>
    );
};

export default Home;