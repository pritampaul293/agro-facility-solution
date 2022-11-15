import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap/esm';
import { Link } from 'react-router-dom';
import Records from './RelatedArticles.json'
const RelatedArticles = () => {
    return (
        <Container>
        <Row>
        <Col >
                    <h3 className='CardHeadline'>RELATED ARTICLES</h3>
                    <Row>
                        {
                            Records.map(({title,picture,des,id})=> {
                                return (


                                    <Card key={id} style={{ width: '16rem', height: '18rem', margin: '10px',borderColor:'white' }}>
                                         <Link  to="/courseDetails">
                                        <Card.Img className='image' variant="top" src={picture}   ></Card.Img>
                                      <Card.Body>
                                            <Card.Title className='newTitle'>{title}</Card.Title>
                                            <Card.Text className='newsSubTitle'>
                                                {des}
                                            </Card.Text>


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

export default RelatedArticles;