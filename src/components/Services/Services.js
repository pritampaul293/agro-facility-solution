import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';
import riadlogo1 from '../../asset/image/Atree.svg';
import cowlog from '../../asset/image/cow.svg';
import ecomlog from '../../asset/image/ecom.svg'





class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">আমাদের সুবিধাসমূহ</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo1}/>
                                <h1 className="serviceName"> <Link  to="/service">উদ্ভিদ বিষয়ক সংবাদ</Link></h1>
                                {/* <p className="serviceDescription">Provide a Handsome Price
                                </p> */}
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={cowlog}/>
                                <h1 className="serviceName">প্রাণী বিষয়ক সংবাদ</h1>
                                {/* <p className="serviceDescription">Land Available in Amazing Spot
                                </p> */}

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={ecomlog}/>
                                <h1 className="serviceName">ই-কমার্স</h1>
                                {/* <p className="serviceDescription">Rent for Super Shop,Market,Picnic spot
                                </p> */}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
            ;
    }
}

export default Services;