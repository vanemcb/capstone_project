import React, { Fragment } from 'react';
import { Container, Image } from 'react-bootstrap'
import income from './images/income.png'


const HomeSideBar = () => {
    return (
        <div>
            <Container fluid>
                <button className='btn hover-shadow' href="#auth0" style={{
                    background: '#E4D8DC',
                    border: 'dashed',
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
                </button>
            </Container>
        </div>
    )
};

export default HomeSideBar;