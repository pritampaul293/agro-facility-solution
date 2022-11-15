import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './EcomDetails.css'

const EcomDetails = () => {
    
    return (
        <Container className='EDetais'>
            <Link to='/Ecom'><Button variant='danger' style={{margin:'4px'}}>Back</Button></Link>
            <Row>
                <Col sm={12} md={8}>
                    <Card style={{ width: '40rem', height: '30rem' }}>

                        <Card.Img variant="top" className='Edetaisimages' src='https://www.millat.com.pk/wp-content/uploads/2021/06/240.png' />

                    </Card>
                </Col>
                <Col sm={6} md={4}>
                    <Card style={{ width: '20rem', height: '30rem' }}>
                        <Card.Body>
                            <Card.Title style={{ color: 'black', fontSize: '25px', textAlign: 'center', marginBottom: '5rem' }}>Price </Card.Title>
                            <Card.Text style={{ color: 'black', marginLeft: '20px' }}>Tractor</Card.Text>
                            <Card.Text style={{ color: 'gray', marginLeft: '20px', fontSize: '40px' }}>$ 327</Card.Text>
                            <Button variant='success' style={{ marginRight: '20px' }}>Buy Now</Button>
                            <Button variant='success'>Add to Curt</Button>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EcomDetails;