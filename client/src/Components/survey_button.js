import React, { Fragment } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import income from './images/income.png'


const SurveyButton = () => {
    return (
        <Button className='btn hover-shadow' href="/add_salary" style={{
            width: '140px',
            background: '#DEE0E6',
            margin: 'auto',
            fontSize: '18px',
            position: 'relative'
        }}>
            <Image src={income}
                height='32'
                style={{
                    margin: '5px 5px 5px 5px'
                }}
            />
            <p style={{ fontSize: '16px', fontStyle: 'italic', color: 'black' }}>
                Add Your Salary
            </p>
        </Button>
    )
};

export default SurveyButton;