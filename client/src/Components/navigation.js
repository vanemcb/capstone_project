import React from 'react';
import { Nav, Container, Navbar, Image, Button } from 'react-bootstrap'
import account from './images/account.png'
import { Link } from 'react-router-dom';
import LogIn from './login_button'
import LogOut from './logout_button'
import Profile from './profile'
import { useAuth0 } from '@auth0/auth0-react';

{/* colors  grisesito: #DEE0E6 azulito: #A7C3D1 azulote: #81A9BD */ }

const Navigation = () => {
    const { isLoading } = useAuth0();
    if (isLoading) return <div>Loading...</div>

    return (
        <div width='100%'>
            <Navbar expand="lg" sticky="top" style={{ background: '#A7C3D1', height: '70px' }}>
                <Container fluid>
                    <Navbar.Brand href="/" style={{
                        fontFamily: "Verdana"
                    }}>SALARY REFERENCE</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link href="/charts/">Charts</Nav.Link>
                            <Nav.Link href="/general_info/">General Info</Nav.Link>
                            <Nav.Link href="/in_process/">Comunity</Nav.Link>
                            <Nav.Link href="/in_process/">Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '40px' }}
                    >
                        <Profile />
                        <LogIn />
                        <LogOut />
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

export default Navigation;