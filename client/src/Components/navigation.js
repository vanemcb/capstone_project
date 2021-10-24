import React from 'react';
import { NavDropdown, Nav, Container, Navbar } from 'react-bootstrap'


const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">SALARY REFERENCE</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/add_salary">Contribute</Nav.Link>

          </Nav>
        </Container>
        <br />
      </Navbar>


      <Navbar bg="secondary" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Salaries" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/by_company">By Company</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  By Position
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  More Filters
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Comunity</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action3">Login</Nav.Link>

          </Nav>
        </Container>
        <br />
      </Navbar>



    </div>


  )
};

export default Navigation;