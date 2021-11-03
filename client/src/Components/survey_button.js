import React, { Fragment } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import income from './images/income.png'


const SurveyButton = () => {
    return (
        <Button className='btn hover-shadow' href="/add_salary" style={{
            width: '160px',
            background: '#CDF2CA',
            border: "dashed",
            borderWidth: "1px",
            borderColor: "black",
            height: '40px',
            margin: 'auto',
            fontSize: '18px',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            display: 'flex'
        }}>
            <p style={{
                fontSize: '18px', fontStyle: 'italic', color: 'black', margin: '0px'
            }}>
                Add Your Salary
            </p>
        </Button>
    )
};

export default SurveyButton;