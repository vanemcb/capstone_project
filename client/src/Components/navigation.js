import React from 'react';
import { NavDropdown, Nav, Container, Navbar, Image } from 'react-bootstrap'
import account from './images/account.png'


const Navigation = () => {
    return (
        <div width='100%'>
            <Navbar expand="lg" sticky="top" style={{ background: '#C9CCD5', height: '65px' }}>
                <Container fluid>
                    <Navbar.Brand href="/">SALARY REFERENCE</Navbar.Brand>
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        {/* make it a button margin sutil with a logo */}
                        <button className='btn hover-shadow' href="#auth0" style={{
                            background: '#93B5C6',
                            border: 'none',
                            fontSize: '18px',
                        }}>
                            <Image src={account}
                                className='rounded-circle'
                                height='28'
                                style={{
                                    margin: '0px 10px 0px 0px'
                                }}
                            />
                            Log in
                        </button>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar expand="lg" sticky="top" style={{ background: '#93B5C6', height: '55px' }}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <NavDropdown title="Salaries">
                                <NavDropdown.Item href="/by_company">By Company</NavDropdown.Item>
                                <NavDropdown.Item href="/by_position">
                                    By Position
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action6" >
                                    More Filters
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">Comunity</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <br />
            </Navbar>



        </div>
    )
};

export default Navigation;