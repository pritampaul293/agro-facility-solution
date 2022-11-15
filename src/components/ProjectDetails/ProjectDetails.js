import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img
                                src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>

                            <Button className="d-grid gap-2"><Link
                                className="linkStyle"
                                to="/map">Maps</Link>
                            </Button>


                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Dhaka 300 Feet</h2>
                            <p className="serviceDescription">300 Feet Road, Bashundhara R/A
                                Dhaka, 1229
                                Bangladesh</p>
                            <ul>
                                <li className="serviceDescription">
                                    An excllent 35 decimal commercial,property is for sale beside the 300 feet Road just
                                    one KM east of Bashundhara Convention Center
                                </li>
                                <li className="serviceDescription">
                                    Perfectly suitable for an University,
                                    Corporate Head Office, Hotel or a shopping Mall.
                                </li>
                                <li className="serviceDescription">The land is ecured by boundary walls on all sides.
                                </li>
                                <li className="serviceDescription"> Only Genuine buyers should contact at the following
                                    phone Number:
                                </li>
                                <li className="serviceDescription"> 0172-496-0859
                                </li>
                                <li className="serviceDescription"> 0174-669-0003
                                </li>


                            </ul>
                            <Button className="d-grid gap-2"><Link
                                className="linkStyle"
                                to="/documents">Papers Documents</Link>
                            </Button>


                        </Col>


                    </Row>


                </Container>


            </Fragment>
        );
    }
}

export default ProjectDetails;