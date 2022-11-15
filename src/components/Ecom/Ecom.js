import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Eomdocuments from './Ecom.json';
import './Ecom.css';
import { Link } from 'react-router-dom';


const Ecom = () => {
    return (
        <Container className='EContainer' fluid='flex'>
            <Row>
                <Col >
                    <Row sm={12} md={6} lg={4}>
                        {Eomdocuments.map(({ title, picture, des, id }) => {
                            return (
                                <Card className='Ecard' style={{ width: '15rem',height:'20rem' }}>
                                    <Link to="./EcomDetails">
                                    <Card.Img variant="top" className='Eimages' src={picture} />
                                    <Card.Body>
                                        <Card.Text style={{color:'gray'}}>{des}</Card.Text>
                                        <Card.Title style={{color:'black', fontSize:'30px'}}>{title}</Card.Title>
                                    </Card.Body>
                                    </Link>
                                </Card>
                            )
                        })
                        }
                    </Row>

                </Col>

            </Row>

        </Container>

    );
};

export default Ecom;