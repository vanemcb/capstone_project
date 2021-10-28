import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import ListLevels from "../Components/ListLevels";
import { Row, Col } from "react-bootstrap";
import HomeSideBar from "../Components/home_sidebar";
import ListCompanies from "../Components/ListCompanies";
import FreeSoloCreateOption from "../Components/searchbar";

const Home = () => {

    return (
        <div style={{ height: '100vh' }}>
        <Fragment >
            <Navigation />
            <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                <Col xs={2} md={2} style={{ display: 'flex' }}>
                    <HomeSideBar />
                </Col>
                <Col className="show-grid" xs={10} md={10}>
                    <Row style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        margin: '-20px 10px 30px 10px',
                        alignContent: 'space-between'
                    }}>
                        <ListCompanies />
                    </Row>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sit amet risus nullam eget felis eget nunc lobortis mattis.Sed elementum tempus egestas sed sed.Ornare aenean euismod elementum nisi quis eleifend.Egestas erat imperdiet sed euismod nisi.Id venenatis a condimentum vitae.Magnis dis parturient montes nascetur ridiculus mus.Ultrices eros in cursus turpis massa tincidunt dui.Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.Arcu felis bibendum ut tristique.Lectus urna duis convallis convallis tellus id.Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.Pharetra vel turpis nunc eget.
                            </p>
                        </Col>
                        <Col xs={3} md={3}>
                            <ListLevels />
                        </Col>
                        <Col xs={3} md={3}>
                            <ListLevels />
                        </Col>
                        <Col xs={3} md={3}>
                            <ListLevels />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <FooterBar className='sticky-bottom'/>
        </Fragment>
        </div>
    );
};

export default Home;