import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplaySpeed: 500,
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>

                <Container className="text-center" id="client-review">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://st2.depositphotos.com/2783505/8415/i/600/depositphotos_84158918-stock-photo-passport-picture-of-a-hispanic.jpg"/>
                                    <h1 className="serviceName"> মোঃ আসিফুল আলম</h1>
                                    <p className="serviceDescription"> এই সাইটটি আসলে অনেক উপকারী একটি সাইট</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://previews.123rf.com/images/koldunovaaa/koldunovaaa1905/koldunovaaa190500340/123744687-photo-d-identit%C3%A9-d-un-gars-en-chemise-%C3%A0-carreaux-et-t-shirt-rose.jpg"/>
                                    <h1 className="serviceName">Mr. Nazmul Chowdhory</h1>
                                    <p className="serviceDescription"> i analysis the requirement of project.
                                        According to the requirement i make a proper technical analysis, then i build a
                                        software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://previews.123rf.com/images/olesiabilkei/olesiabilkei1901/olesiabilkei190100003/116454440-.jpg"/>
                                    <h1 className="serviceName">Mr. Foyez Ahmend</h1>
                                    <p className="serviceDescription"> i analysis the requirement of project.
                                        According to the requirement i make a proper technical analysis, then i build a
                                        software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://previews.123rf.com/images/warrengoldswain/warrengoldswain1610/warrengoldswain161000218/65431580-portrait-de-l-homme-r%C3%A9el-africain-noir-sans-id-d-expression-ou-d-un-passeport-photo-collection-compl.jpg"/>
                                    <h1 className="serviceName">Md. Hafez Ullah</h1>
                                    <p className="serviceDescription"> I am very much satisfied by this R@ Real estate
                                        Company , and thankful to my R@ Real estate Company Support team.</p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>


                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;