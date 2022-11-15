import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">

                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1>দ্রুত যোগাযোগ করুন</h1>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="serviceDescription">নাম</Form.Label>
                                    <Form.Control type="text" placeholder="আপনার নাম লিখুন"/>

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="serviceDescription">ইমেল এড্রেস</Form.Label>
                                    <Form.Control type="text" placeholder="আপনার ইমেল এড্রেসটি লিখুন"/>

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="serviceDescription">বার্তা</Form.Label>
                                    <Form.Control as="textarea" rows="3" type="text"/>

                                </Form.Group>


                                <Button variant="primary"  type="submit">
                                    জমা দিন
                                </Button>
                            </Form>


                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <h1 style={{marginLeft:'20px',color:'black'}}>আলোচনার জন্য</h1>
                            <p className="serviceDescription"style={{marginLeft:'20px'}}> কন্দাকার পাড়া , ৭নং ওয়ার্ড, চকারিয়া ,কক্সবাজার ,বাংলাদেশ</p>
                            <p className="serviceDescription" style={{marginLeft:'20px'}}><FontAwesomeIcon
                                icon={faEnvelope}/> Pritampaul@gmail.com</p>
                            <p className="serviceDescription" style={{marginLeft:'20px'}}><FontAwesomeIcon
                                icon={faPhone}/> +৮৮০১৯৭৪৯৫৩৪৮৬</p>

                        </Col>


                    </Row>

                </Container>

            </Fragment>
        )
            ;
    }
}

export default ContactSection;