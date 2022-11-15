import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">FEATURED PROPERTIES</h1>
                    <Row>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://media.sciencephoto.com/c0/46/76/72/c0467672-800px-wm.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Dhaka 300 Feet</h5>
                                    <p className="text-start courseDes">4 kata, 300 feet Road just one KM east of Bashundhara Convention Center</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Chittagong Khulshi</h5>
                                    <p className="text-start courseDes">5 katha, Under Development Residential Plot for Sale at khulshi</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://www.destinationpropertiesutah.com/wp-content/uploads/2019/09/iStock-182247315-1024x682.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Cox's Bazar Cantonment</h5>
                                    <p className="text-start courseDes">5 katha, Ready Residential Plot for Sale at nowadighi</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://thumbs.dreamstime.com/b/real-estate-land-sale-22442440.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Khulna Abashik</h5>
                                    <p className="text-start courseDes">5 katha, Ready Residential Plot for Sale at nowadighi</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>


                    </Row>
                </Container>

            </Fragment>
        )
            ;
    }
}

export default Courses;