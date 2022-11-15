import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle text-center">Recent Projects</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/vacant-land-that-has-sold-600w-13365145.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">DHAKA</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        4 kata, 300 feet Road
                                        just one KM east of Bashundhara Convention Center
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/advertising-billboard-immersed-rural-scene-600w-1105652150.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">CHITTAGONG</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        5 katha, Under Development Residential Plot for Sale at khulshi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/land-plot-aerial-view-identify-600w-1968019828.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">KHULNA</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        5 katha, Ready Residential Plot for Sale at nowadighi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>

            </Fragment>
        )
            ;
    }
}

export default RecentProjects;