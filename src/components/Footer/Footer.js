import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className="serviceName" style={{color:'whitesmoke'}}>Follow Me</h1>
                            <a className="socialLink" href="https://www.facebook.com/riadchy50/"><FontAwesomeIcon
                                icon={faFacebook}/> Facebook</a><br/><br/>
                            <a className="socialLink"
                               href="https://www.youtube.com/channel/UCWxWb2jj3Qnb5mVSDppikRQ"><FontAwesomeIcon
                                icon={faYoutube}/> Youtube</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className="serviceName" style={{color:'whitesmoke'}}>Address</h1>
                            <p className="serviceDescription" style={{color:'whitesmoke'}}>Khondakar Para, 7No Ward, Chakaria, Cox's Bazar,
                                Bangladesh</p>
                            <p className="serviceDescription" style={{color:'whitesmoke'}}><FontAwesomeIcon
                                icon={faEnvelope}/> Pritampaul@gmail.com</p>
                            <p className="serviceDescription" style={{color:'whitesmoke'}}><FontAwesomeIcon
                                icon={faPhone}/> +8801974953486</p>


                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className="serviceName" style={{color:'whitesmoke'}}>Information</h1>
                            <Link className="footerLink" to="/about" >About Me</Link><br/>

                            <Link className="footerLink" to="/contact">Contact Me</Link>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className="serviceName" style={{color:'whitesmoke'}}>Legal</h1>
                            <Link className="footerLink" to="/Refund">Refund Policy</Link>
                            <br/>
                            <Link className="footerLink" to="/Terms">Terms and Condition</Link><br/>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>


                        </Col>

                    </Row>

                </Container>
                <Container fluid={true} className="text-center copyrightSection">

                    <a className="copyrightLink" href="#">Pritam.com &copy; 2020-2022</a>


                </Container>

            </Fragment>
        );
    }
}

export default Footer;