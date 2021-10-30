import React, { Fragment } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import income from './images/income.png'


const HomeSideBar = () => {
    return (
        <div>
            <Container fluid>
                <Button className='btn hover-shadow' href="/add_salary" style={{
                    background: '#DEE0E6',
                    fontSize: '18px',
                }}>
                    <Image src={income}
                        height='32'
                        style={{
                            margin: '5px 5px 5px 5px'
                        }}
                    />
                    <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                        Add Your Salary
                    </p>
                </Button>
            </Container>
        </div>
    )
};

export default HomeSideBar;