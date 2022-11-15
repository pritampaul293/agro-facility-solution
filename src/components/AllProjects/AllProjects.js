import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">

                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://media.sciencephoto.com/c0/46/76/72/c0467672-800px-wm.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Dhaka 300 Feet</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    4 kata, 300 feet Road
                                        just one KM east of Bashundhara Convention Center
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Chittagong Khulshi</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    5 katha, Under Development Residential Plot for Rent at khulshi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://www.destinationpropertiesutah.com/wp-content/uploads/2019/09/iStock-182247315-1024x682.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Cox's Bazar
                                        Cantonment</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    5 katha, Ready Residential Plot for Rent at nowadighi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://thumbs.dreamstime.com/b/real-estate-land-sale-22442440.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Khulna Abashik</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    5 katha, Ready Residential Plot for Rent at nowadighi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://media.sciencephoto.com/c0/46/76/72/c0467672-800px-wm.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Bohordarhat abashik B-Block 1No
                                        Road </Card.Title>
                                    <Card.Text className="projectCardDes">
                                    5 katha, Ready Residential Plot for Rent at nowadighi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Chakaria Biddapit
                                        area</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    5 katha, Ready Residential Plot for Rent at nowadighi
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllProjects;