import React, { Fragment } from 'react';
import { Nav, Container, Navbar, Image } from 'react-bootstrap'
import man from './images/man.png'
import beard from './images/beard-man.png'
import woman from './images/woman.png'


const FooterBar = () => {
  return (
    <div>
      <Navbar bg="secondary" expand="lg" fixed="bottom">
        <Container fluid>
          <Fragment>
            <div class="col-auto - variable width content">
              <Navbar.Brand href="#LinkToBrandingPage">GET TO KNOW US BETTER!!</Navbar.Brand>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <p style={{ fontSize: '12px' }}>
                  &copy; {new Date().getFullYear()} PanDevs - All Rights Reserved
                </p>
              </Nav>
            </div>
            <div class="col-auto">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '80px' }}
                navbarScroll
              >
                <div class="col-auto">
                  <Image src={beard}
                    className='hover-shadow rounded-circle'
                    height='50'
                  />
                  <Nav.Link href="#action7">Julian</Nav.Link>
                </div>
                <div class="col-auto">
                  <Image src={woman}
                    className='hover-shadow rounded-circle'
                    height='50'
                  />
                  <Nav.Link href="#action7">Vanessa</Nav.Link>
                </div>
                <div class="col-auto">
                  <Image src={man}
                    className='hover-shadow rounded-circle'
                    height='50'
                  />
                  <Nav.Link href="#action7">Alexander</Nav.Link>
                </div>
              </Nav>
            </div>
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
    </div>
  )
};

export default FooterBar;