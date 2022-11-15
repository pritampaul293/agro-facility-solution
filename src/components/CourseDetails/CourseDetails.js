import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0 ">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName"> Calculated rent:</h1>
                            <ul>

                                <li className="serviceDescription">Minimum rent: $277.00 excl. GST</li>
                                <li className="serviceDescription">Primary production – perpetual leases: 1.5% of the land value
</li>
                                <li className="serviceDescription">Primary production – term leases, licences and permits to occupy: 0.75% of the land value
</li>
                                <li className="serviceDescription">The annual rent is capped at no more than 10% above the previous year's annual rent</li>
                                
                                <br/>

                                <Button variant="primary">Documents</Button>

                            </ul>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;