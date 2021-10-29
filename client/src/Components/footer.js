import React, { Fragment } from 'react';
import { Nav, Container, Navbar, Image, Row, Col } from 'react-bootstrap'
import man from './images/man.png'
import beard from './images/beard-man.png'
import woman from './images/woman.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'


const FooterBar = () => {
    return (
        <Navbar className="sticky-bottom" expand="lg" style={{ background: '#DEE0E6', height: '70px' }}>
            <Container fluid>
                <Fragment>
                    <div class="col-auto - variable width content">
                        <Navbar.Brand href="#LinkToBrandingPage">GET TO KNOW US BETTER!!</Navbar.Brand>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ height: '24px' }}
                        >
                            <p style={{ fontSize: '12px' }}>
                                &copy; {new Date().getFullYear()} PanDevs - All Rights Reserved
                            </p>
                        </Nav>
                    </div>
                    <Col className="show-grid">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{
                                maxHeight: '65px',
                                minHeight: '5px'
                            }}
                        >
                            {/*Julian Info*/}
                            <Col xs={4} md={4}>
                                <Image src={beard}
                                    className='hover-shadow rounded-circle'
                                    height='40'
                                />
                                <Nav.Link href="#action7" style={{ height: '20px', fontSize: '10px' }}>Julian Tabares</Nav.Link>
                            </Col>
                            {/*Vanesa Info*/}
                            <Col xs={4} md={4} className="show-grid" style={{ display: 'flex' }}>
                                <Row>
                                    <Col md={6} className="show-grid">
                                        <Image src={woman}
                                            className='hover-shadow rounded-circle'
                                            height='40'
                                            align-items='right'
                                        />
                                    </Col>
                                    <Col style={{ display: 'flex' }}>
                                        <Image src={linkedin}
                                            className='hover-shadow'
                                            height='20'
                                            align-item='right'
                                        />
                                        <Image src={github}
                                            className='hover-shadow'
                                            height='20'
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Vanessa Mususue</p>
                                </Row>
                            </Col>
                            {/*Alexander Info*/}
                            <Col xs={4} md={4}>
                                <Image src={man}
                                    className='hover-shadow rounded-circle'
                                    height='40'
                                />
                                <Nav.Link href="#action7" style={{ height: '20px', fontSize: '10px' }}>Alexander Cardona</Nav.Link>
                            </Col>
                        </Nav>
                    </Col>
                    <div class="col-auto - variable width content">
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="LinkToTechstars">TechStars</Nav.Link>
                            <Nav.Link href="LinkToHolberton">Holberton</Nav.Link>

                        </Nav>
                    </div>
                </Fragment>
            </Container>
            <br />
        </Navbar>
    )
};

export default FooterBar;