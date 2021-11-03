import React, { Fragment } from 'react';
import { Nav, Container, Navbar, Image, Row, Col } from 'react-bootstrap'
import man from './images/man.png'
import beard from './images/beard-man.png'
import woman from './images/woman.png'



const FooterBar = () => {
    return (
        <Navbar style={{ sticky: "bottom", background: '#DEE0E6', height: '70px', width: '100%', bottom: '0%' }}>
            <Fragment>
                <Col md={3} >
                    <Navbar.Brand>GET TO KNOW US BETTER!!</Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                            height: '24px',
                            maxHeight: '65px',
                            minHeight: '5px'
                        }}
                    >
                        <p style={{ fontSize: '12px' }}>
                            &copy; {new Date().getFullYear()} PanDevs - All Rights Reserved
                        </p>
                    </Nav>
                </Col>
                <Col md={7} className="show-grid justify-content-md-center" style={{ display: 'flex' }} >
                    <Nav
                        className="my-2 my-lg-0"
                        style={{
                            maxHeight: '65px',
                            minHeight: '5px'
                        }}
                    >
                        {/*Julian Info*/}
                        <Col xs={4} md={4} style={{ width: '120px' }}>
                            <a href="https://www.linkedin.com/in/julian-tabares-3691b0206/"><Image src={beard}
                                className='hover-shadow rounded-circle'
                                height='40'
                                style={{ margin: '0px 0px 0px 25px' }}
                            /></a>
                            <Row style={{ fontSize: '12px', fontStyle: 'italic', justifyContent: 'center' }}>
                                Julian Tabares
                            </Row>
                        </Col>
                        {/*Vanesa Info*/}
                        <Col xs={4} md={4} style={{ width: '120px' }} >
                            <a href="linkedin.com/in/vanessa-mususué-castro-579624158"><Image src={woman}
                                className='hover-shadow rounded-circle'
                                height='40'
                                style={{ margin: '0px 0px 0px 25px' }}
                            /></a>
                            <Row style={{ fontSize: '12px', fontStyle: 'italic', justifyContent: 'center' }}>
                                Vanessa Mususue
                            </Row>
                        </Col>
                        {/*Alexander Info*/}
                        <Col xs={4} md={4} style={{ width: '120px' }}>
                            <a href="https://www.linkedin.com/in/alexander-cardona-2501761a6/"><Image src={man}
                                className='hover-shadow rounded-circle'
                                height='40'
                                style={{ margin: '0px 0px 0px 25px' }}
                            /></a>
                            <Row style={{ fontSize: '12px', fontStyle: 'italic', justifyContent: 'center' }}>
                                Alexander Cardona
                            </Row>
                        </Col>
                    </Nav>
                </Col>
                <Col md={2}>
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '70px' }}
                        navbarScroll
                    >

                        <Nav.Link href="https://www.holbertonschool.com/" style={{
                            fontSize: '16px', fontStyle: 'italic', justifyContent: 'center', display: "flex",
                            alignItems: 'center',
                        }}>Holberton</Nav.Link>

                    </Nav>
                </Col>
            </Fragment>
        </Navbar>
    )
};

export default FooterBar;