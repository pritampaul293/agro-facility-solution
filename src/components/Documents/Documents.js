import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Documents extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={4} md={8} sm={12}>
                            <img
                                src="https://thefinancialexpress.com.bd/uploads/1530721503.jpg"/>
                            <Col>
                                <img
                                    src="https://thefinancialexpress.com.bd/uploads/1530721503.jpg"/>
                            </Col>
                            <Col>
                                <img
                                    src="https://thefinancialexpress.com.bd/uploads/1530721503.jpg"/>
                            </Col>


                        </Col>

                    </Row>


                </Container>
            </Fragment>
        );
    }
}

export default Documents;