import React from 'react';
import { Nav, Container, Navbar, Image } from 'react-bootstrap'
import account from './images/account.png'
import { Link } from 'react-router-dom';


{/* colors  grisesito: #DEE0E6 azulito: #A7C3D1 azulote: #81A9BD */ }

const Navigation = () => {

    return (
        <div width='100%'>
            <Navbar expand="lg" sticky="top" style={{ background: '#A7C3D1', height: '70px' }}>
                <Container fluid>
                    <Navbar.Brand href="/">SALARY REFERENCE</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link href="/by_company/">Graphics</Nav.Link>
                            <Nav.Link href="/by_position/">General Info</Nav.Link>
                            <Nav.Link href="#action1">Comunity</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >

                        <button className='btn hover-shadow' href="#auth0" style={{
                            background: '#81A9BD',
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
        </div>
    )
};

export default Navigation;