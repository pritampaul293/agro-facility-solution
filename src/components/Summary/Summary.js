import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


class Summary extends Component {
    render() {
        return (
            <Fragment>
               
                <Container fluid={true} className="summaryBanner summarySection p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            {/* <Row className="countSection"> */}
                                <Col  sm={4}  md={6} lg={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={83} duration={0.6}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef}/>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>

                                        </Col>

                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={1723} duration={0.6}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef}/>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Customers Satisfied</h4>

                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={252} duration={0.6}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef}/>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Quality Contents</h4>

                                        </Col>
                                    </Row>

                                </Col>
                                {/* <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard">

                                        <Card.Body>
                                            <Card.Title className="cardTitle text-start">How I Work</Card.Title>
                                            <Card.Text>

                                                <p className="cartSubTitle text-start"><FontAwesomeIcon
                                                    className="iconBullet"
                                                    icon={faCheckCircle}/> To Get Facilities Registration First</p>
                                                <p className="cartSubTitle text-start"><FontAwesomeIcon
                                                    className="iconBullet"
                                                    icon={faCheckCircle}/> You Can Search Any kind of land and Any Where
                                                </p>
                                                <p className="cartSubTitle text-start"><FontAwesomeIcon
                                                    className="iconBullet"
                                                    icon={faCheckCircle}/> We Are Provide Authentic Document for land
                                                </p>
                                                <p className="cartSubTitle text-start"><FontAwesomeIcon
                                                    className="iconBullet"
                                                    icon={faCheckCircle}/> We are't compromise to wrong People
                                                </p>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col> */}
                            {/* </Row> */}
                        </Container>

                    </div>
                </Container>
            </Fragment>
        )
            ;
    }
}

export default Summary;